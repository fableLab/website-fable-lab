import React from 'react'
import type { LicenseBlock as LicenseBlockProps } from '@/payload-types'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { TitleBlock } from '@/blocks/TitleBlock/Component'

export const LicenseBlock: React.FC<LicenseBlockProps> = ({ blocks, description, id }) => {

  return (
    <section className="space-y-6">
      <TitleBlock name="Licence libre" id={id} />
      <p className="!text-xl">{description}</p>
      {blocks && (
        <div className='space-y-4'>
          <RenderBlocks blocks={blocks} />
        </div>
      )}
      <p className='!text-xl'>Cette ressource est partagée librement avec la licence CC BY-SA 4.0.</p>
      <div className="space-y-1">
        <p><a href='https://www.fable-lab.org/licences-libres' className='underline !text-xl'>Retrouvez toutes les modalités de partage de la ressource sur notre page dédiée.</a></p>
        <p><a href='#' className='underline !text-xl'>Écrivez-nous vos questions et retours via notre formulaire de contact.</a></p>
      </div>
    </section>
  )
}
