// app/labslang/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import type { Labslang } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { computeBlockNumbers } from '@/utilities/blockNumbering'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import Summary from '@/components/Summary'
import LabsLangPartners from '@/components/LabsLangPartners'
import Banner from '@/components/Banner/Banner'
import { cn } from '@/utilities/ui'
import PrintButton from '@/components/PrintButton'
import { strokePrimaryColorsMap, ColorsList } from "@/constants/ColorMaps"

const colorClasses: Record<'blue' | 'perspective', string> = {
  blue: '[&_h2]:text-azure-800   [&_h3]:text-azure-800   [&_h4]:text-azure-800',
  perspective: '[&_h2]:text-perspective-500   [&_h3]:text-perspective-500   [&_h4]:text-perspective-500',
}
const bgSummaryMap: Record<'blue' | 'perspective', string> = {
  blue: 'bg-azure-100',
  perspective: 'bg-perspective-100',
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const labslangs = await payload.find({
    collection: 'labslangs',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: { slug: true },
  })

  return labslangs.docs
    .filter((doc): doc is Labslang & { slug: string } => typeof doc.slug === 'string')
    .map(({ slug }) => ({ slug }))
}

type Args = {
  params: Promise<{ slug?: string }>
}

export default async function LabsLangPage({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise

  const labslang = await queryLabsLangBySlug({ slug })
  if (!labslang) return notFound()

  const { blocks, title, color = "blue" } = labslang

  // Hard-coded sections continue the CMS numbering as top-level sections.
  const { nextMajor } = computeBlockNumbers(blocks)

  return (
    <>
      <PageClient />
      {draft && <LivePreviewListener />}


      <aside className="grid grid-cols-12 flex-grow">

        <div className={cn('hidden md:block md:col-span-3 print:!hidden', bgSummaryMap[color || 'blue'])}>
          <Summary color={color || 'blue'} />
        </div>
        <div className="md:col-span-9 col-span-12 print:!col-span-12">
          <article className="pb-24">
            <Banner title={title} color={color || 'blue'} />
            <div
              className={cn(
                'flex flex-col pt-8 px-12 2xl:px-32 text-black',
                '[&_p]:text-2xl [&_li]:text-2xl',
                '[&_h2]:text-4xl [&_h3]:text-3xl [&_h4]:text-2xl [&_h4]:font-bold',
                colorClasses[color || 'blue'],
              )}
            >
              <Summary mobileOnly={true} />
              <RenderBlocks blocks={blocks} />

              <LabsLangPartners startNumber={nextMajor} />

            </div>
          </article>
        </div>
      </aside>
    </>
  )
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const labslang = await queryLabsLangBySlug({ slug })
  return generateMeta({ doc: labslang })
}

const queryLabsLangBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'labslangs',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: { equals: slug },
    },
  })
  return result.docs?.[0] || null
})
