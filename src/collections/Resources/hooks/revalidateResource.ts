import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Resource } from '../../../payload-types'

export const revalidateResource: CollectionAfterChangeHook<Resource> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/ressources/${doc.slug}`

      payload.logger.info(`Revalidating resource at path: ${path}`)

      revalidatePath(path)
      revalidatePath('/ressources') // Revalidate list page
      revalidateTag('resources-sitemap')
    }

    // If the resource was previously published, we need to revalidate the old path
    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      const oldPath = `/ressources/${previousDoc.slug}`

      payload.logger.info(`Revalidating old resource at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidatePath('/ressources') // Revalidate list page
      revalidateTag('resources-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Resource> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/ressources/${doc?.slug}`
    revalidatePath(path)
    revalidatePath('/ressources') // Revalidate list page
    revalidateTag('resources-sitemap')
  }

  return doc
}
