import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { generateMeta } from '@/utilities/generateMeta'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import Banner from '@/components/Banner/Banner'
import PageClient from './page.client'
import Summary from '@/components/Summary'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const members = await payload.find({
    collection: 'members',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = members.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      return { slug }
    })

  return params
}

type Args = {
  params: { slug?: string }
};

export default async function member({ params }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = params
  const url = '/members' + slug

  let member: RequiredDataFromCollectionSlug<'members'> | null

  member = await queryMemberBySlug({
    slug,
  })

  // Remove this code once your website is seeded
  // if (!member && slug === 'home') {
  //   member = homeStatic
  // }

  if (!member) {
    return <PayloadRedirects url={url} />
  }

  const { hero, layout } = member

  return (
    <>
       <PageClient />
      {/* Allows redirects for valid members too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <aside className="grid grid-cols-12 flex-grow">
            <div className="md:col-span-3 col-span-0 bg-cinnabar-200">
              <Summary />
            </div>
            <div className="md:col-span-9 col-span-12">
              <article className="pb-24">
                <Banner title={member.name} className="bg-cinnabar-500" />
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

export async function generateMetadata( { params }: Args): Promise<Metadata> {
  const { slug = 'home' } = params

  console.log('🪵 RESOLVING SLUG:', slug);
  const member = await queryMemberBySlug({
    slug,
  })

  return generateMeta({ doc: member })
}

const queryMemberBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'members',
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
