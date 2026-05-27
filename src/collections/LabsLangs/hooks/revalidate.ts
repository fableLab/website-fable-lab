import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Labslang } from '../../../payload-types'


export const revalidateLabsLangs: CollectionAfterChangeHook<Labslang> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/labslangs/${doc.slug}`

      payload.logger.info(`Revalidating LabsLang page at path: ${path}`)

      revalidatePath(path)
      revalidatePath('/labslangs') // Revalidate list page
      revalidateTag('labslangs-sitemap')
    }

    // If the project was previously published, we need to revalidate the old path
    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      const oldPath = `/labslangs/${previousDoc.slug}`

      payload.logger.info(`Revalidating old labslang page at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidatePath('/labslangs') // Revalidate list page
      revalidateTag('labslangs-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Labslang> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/labslangs/${doc?.slug}`
    revalidatePath(path)
    revalidatePath('/labslangs') // Revalidate list page
    revalidateTag('labslangs-sitemap')
  }

  return doc
}
