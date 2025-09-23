import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'

import Banner from '@/components/Banner/Banner'
import RichText from '@/components/RichText'
import { Title } from '@/components/Title'
import { Resource } from '@/components/Resource'
import { DividerBlock } from '@/blocks/DividerBlock/Component'
import { Link } from '@payloadcms/ui'

// interface PageProps {
//   searchParams?: {
//     mediation?: string;
//   };
// }
// export default async function ResourcesPage({ searchParams }: PageProps) {
//   const payload = await getPayload({ config: config })
//   const mediationFilter = searchParams?.mediation

type PageProps = {
  searchParams: Promise<{
    mediation?: string;
  }>;
};

export default async function ResourcesPage({ searchParams: searchParamsPromise }: PageProps) {
  const payload = await getPayload({ config });
  const { mediation } = await searchParamsPromise;

  const textsPage = await payload.findGlobal({
    slug: 'textsPage', // required
    depth: 1,
    fallbackLocale: false,
    overrideAccess: false,
    showHiddenFields: true,
  })

  const resources = await payload.find({
    collection: 'resources',
    depth: 1,
    page: 1,
    limit: 10,
    ...(mediation ? {
      where: {
        mediation: {
          equals: mediation
        }
      }
    } : {})
  })

  return (
    <>
      <aside className="grid grid-cols-12 flex-grow">
        <div className="md:col-span-3 col-span-0 bg-azure-100">
        </div>
        <div className="md:col-span-9 col-span-12">
          <article className="pb-24">
            <Banner title="Les ressources" color="blue" />
            <div className="flex flex-col pt-8 px-6 md:px-12 2xl:px-32
              [&_h2]:text-azure-800 [&_h3]:text-azure-800 [&_h4]:text-azure-800 [&_p]:text-2xl text-black [&_a]:text-azure-800 [&_strong]:text-azure-800
              [&_h4]:text-3xl [&_h4]:font-bold">
              <div>
                {textsPage?.resources && <RichText data={textsPage.resources} enableGutter={false} />}
                <p>Chez fable-Lab, nous imaginons, nous prototypons et nous développons <strong>des ressources de médiation vers l’expression écrite et orale.</strong></p>
                <p>Toutes ces ressources sont pensées et conçues avec les personnes qui sont amenées à les utiliser !</p>
              </div>

              <DividerBlock color='yellow' className="my-12" />

              <div>
                <Title name="Toutes les ressources" />
                <section className="my-6 columns-1 md:columns-3 2xl:columns-3 gap-12 *:mb-12">
                  {resources.docs.map(resource => (
                    <Resource key={resource.id} {...resource} />
                  ))}
                </section>
              </div>
            </div>
          </article>
        </div>
      </aside>
    </>
  )
}
