import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'

import Banner from '@/components/Banner/Banner'
import RichText from '@/components/RichText'
import { Title } from '@/components/Title'
import { Project } from '@/components/Project'

export default async function ProjectsPage() {
  const payload = await getPayload({ config: config })


  const textsPage = await payload.findGlobal({
    slug: 'textsPage', // required
    depth: 1,
    fallbackLocale: false,
    overrideAccess: false,
    showHiddenFields: true,
  })

  const projects = await payload.find({
    collection: 'projects',
    depth: 1,
    page: 1,
    limit: 10
  })

  return (
    <>
      <aside className="grid grid-cols-12 flex-grow">
        <div className="md:col-span-3 col-span-0 bg-cinnabar-200">
        </div>
        <div className="md:col-span-9 col-span-12">
          <article className="pb-24">
            <Banner title="Nos projets de médiation" color="orange" />
            <div className="flex flex-col pt-8 px-6 md:px-12 2xl:px-32
              [&_h2]:text-cinnabar-500 [&_h3]:text-cinnabar-500 [&_h4]:text-cinnabar-500 [&_p]:text-2xl text-black [&_a]:text-cinnabar-500
              [&_h4]:text-3xl [&_h4]:font-bold">
              <div>
                {textsPage?.projects && <RichText data={textsPage.projects} enableGutter={false} />}
              </div>

              <div className="my-6">
                <Title name="Tous les projets" />
                <section className="my-6 columns-1 md:columns-2 2xl:columns-3 gap-12 *:mb-12">
                  {projects.docs.map(project => (
                    <Project key={project.id} {...project} />
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
