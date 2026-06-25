import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { cache } from 'react'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { computeBlockNumbers } from '@/utilities/blockNumbering'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import Link from 'next/link'
import Summary from '@/components/Summary'
import LabsLangPartners from '@/components/LabsLangPartners'

export default async function LabsLangPage() {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })
  const data = await queryLabsLang()

  const labsLangsPages = await payload.find({
    collection: 'labslangs',
    draft: false,
    depth: 1,
    limit: 100,
    where: {
      _status: {
        equals: 'published'
      }
    },
  });

  if (!data) return null

  // Hard-coded sections continue the CMS numbering as top-level sections.
  const { nextMajor } = computeBlockNumbers(data.blocks)
  const guideNumber = `${nextMajor}`

  return (
    <>
      <aside className="grid grid-cols-12 flex-grow">
        <div className="hidden md:block md:col-span-3 bg-azure-100 print:!hidden">
          <Summary color={'blue'} />
        </div>
        <div className="md:col-span-9 col-span-12 print:!col-span-12">
          <article className="pb-24">

            <div className="flex flex-col pt-8 px-12 2xl:px-32
              [&_h2]:text-azure-800 [&_h3]:text-azure-800 [&_h4]:text-azure-800 text-black
              [&_p]:text-2xl [&_li]:text-2xl
              [&_h2]:text-4xl [&_h3]:text-3xl [&_h4]:text-2xl [&_h4]:font-bold">
              {draft && <LivePreviewListener />}
              <Summary mobileOnly={true} color={'blue'} />
              <RenderBlocks blocks={data.blocks ?? []} />
              <div className="mb-4">
                <div className="flex items-center">
                  <div className="flex-1">
                    <div className="flex justify-start">
                      <div className="w-full md:w-8/12">
                        <h2
                          id="guide-methodologique"
                          className="font-bold font-basis flex items-center gap-4"
                          data-summary-visible="true"
                          data-summary-name="Guide méthodologique"
                          data-summary-number={guideNumber}
                        >
                          <span className="md:hidden print:!inline">{guideNumber}.</span>Guide méthodologique</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ol className="list-disc list-inside">
                {labsLangsPages.docs.map(page => (
                  <li key={page.id}>
                    <Link href={`/labslang/${page.slug}`} className="font-semibold">{page.title}</Link>
                  </li>
                ))}
              </ol>
              <LabsLangPartners startNumber={nextMajor + 1} />

            </div>
          </article>
        </div>
      </aside>
    </>
  )
}

const queryLabsLang = cache(async () => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })
  return payload.findGlobal({
    slug: 'LabsLangPage',
    draft,
    overrideAccess: draft,
    depth: 2,
  })
})
