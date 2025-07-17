import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'

import type { Project } from '@/payload-types'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import Summary from '@/components/Summary'
import Banner from '@/components/Banner/Banner'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const projects = await payload.find({
    collection: 'projects',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  // const params = projects.docs.map(({ slug }) => {
  //   return { slug }
  // })

  const params = projects.docs.map(({ slug }) => {
    if (typeof slug === 'string') return { slug }
    if (slug && typeof slug.current === 'string') return { slug: slug.current }
    return { slug: '' }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Project({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/projects/' + slug
  const project = await queryProjectBySlug({ slug })

  if (!project) return <PayloadRedirects url={url} />
  const { blocks } = project


  return (
    <>
    <PageClient />
    {draft && <LivePreviewListener />}


    <aside className="grid grid-cols-12 flex-grow">
      <div className="md:col-span-3 col-span-0 bg-cinnabar-200">
        <Summary />
      </div>
      <div className="md:col-span-9 col-span-12">
        <article className="pb-24">
          <Banner title={project.name} className="bg-cinnabar-500" />
          <div className="flex flex-col pt-8 px-12 2xl:px-32
              [&_h2]:text-cinnabar-500 [&_h3]:text-cinnabar-500 [&_h4]:text-cinnabar-500 [&_p]:text-2xl text-black
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
  const project = await queryProjectBySlug({ slug })

  return generateMeta({ doc: project })
}

const queryProjectBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'projects',
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
