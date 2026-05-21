import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'

import configPromise from '@payload-config'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

import Summary from '@/components/Summary'
import Banner from '@/components/Banner/Banner'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'accueil'
    })
    .map(({ slug }) => {
      return { slug }
    })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = 'accueil' } = await paramsPromise
  const url = '/' + slug

  const page: RequiredDataFromCollectionSlug<'pages'> | null = await queryPageBySlug({
    slug,
  })

  if (!page) {
    return notFound()
  }

  const { blocks } = page

  return (
    <>
      <PageClient />

      <aside className="grid grid-cols-12 flex-grow">
        <div className="md:col-span-3 col-span-0 bg-lavender-200">
          <Summary />
          {/*<div className="ms-8 me-16 mt-8 mb-12">
            <div className="mx-auto mt-8 mb-12 flex justify-center items-center">
              <button className="rounded-full transition duration-200 w-60 group grid grid-cols-6 gap-0 items-center place-items-center text-base bg-lavender-400 hover:bg-lavender-200 py-4 px-6">
                <div className="col-span-5">
                  <span className="text-center font-medium px-2 text-black">Télécharger cette page</span>
                </div>
                <div className="col-span-1 text-center relative w-9 h-9">
                  <img alt="icon" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" className="absolute inset-0 transition-opacity duration-200 opacity-100 group-hover:opacity-0" style={{ color: 'transparent' }} src="/_next/image?url=%2Farrows%2Farrow-right-icon.png&amp;w=96&amp;q=75" />
                  <img alt="icon hover" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" className="absolute inset-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100" style={{ color: 'transparent' }} src="/_next/image?url=%2Farrows%2Farrow-right-zigzag-icon.png&amp;w=96&amp;q=75" />
                </div>
              </button>
            </div>
          </div>*/}
        </div>
        <div className="md:col-span-9 col-span-12">
          <article className="pb-24">
            <Banner title={page.title} color="violet" />
            <Summary mobileOnly={true} />
            {draft && <LivePreviewListener />}
            <div className="flex flex-col pt-8 px-6 md:px-12 2xl:px-32 2xl:mr-32
            [&_h2]:text-camelot-800 [&_h3]:text-camelot-800 [&_h4]:text-camelot-800 [&_strong]:text-camelot-800  text-camelot-800
            [&_p]:text-2xl [&_li]:text-2xl [&_h2]:text-4xl [&_h3]:text-3xl [&_h4]:text-2xl [&_h4]:font-bold">
              <RenderBlocks blocks={blocks} />
            </div>
          </article>
        </div>
      </aside>
    </>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = 'accueil' } = await paramsPromise
  const page = await queryPageBySlug({
    slug,
  })

  return generateMeta({ doc: page })
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
