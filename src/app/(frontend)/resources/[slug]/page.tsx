import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import type { Resource } from '@/payload-types'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

import Summary from '@/components/Summary'
import Banner from '@/components/Banner/Banner'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const resources = await payload.find({
    collection: 'resources',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  // const params = resources.docs.map(({ slug }) => {
  //   return { slug }
  // })

  const params = resources.docs.map(({ slug }) => {
    if (typeof slug === 'string') return { slug }
    //if (slug && typeof slug.current === 'string') return { slug: slug.current }
    //return { slug: '' }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Resource({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/resources/' + slug
  const resource = await queryResourceBySlug({ slug })

  if (!resource) return notFound()
  const { blocks } = resource


  return (
    <>
      <PageClient />
      {draft && <LivePreviewListener />}


      <aside className="grid grid-cols-12 flex-grow">
        <div className="md:col-span-3 col-span-0 bg-azure-100">
          <Summary />
        </div>
        <div className="md:col-span-9 col-span-12">
          <article className="pb-24">
            <Banner title={resource.name} color="blue" />
            <div className="flex flex-col pt-8 px-12 2xl:px-32
              [&_h2]:text-azure-800 [&_h3]:text-azure-800 [&_h4]:text-azure-800 text-black
              [&_p]:text-2xl [&_li]:text-2xl
              [&_h4]:text-3xl [&_h4]:font-bold">
              <RenderBlocks blocks={blocks} />
            </div>
          </article>
        </div>
      </aside>
    </>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const resource = await queryResourceBySlug({ slug })

  return generateMeta({ doc: resource })
}

const queryResourceBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'resources',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
