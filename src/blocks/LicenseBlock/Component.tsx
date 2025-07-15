import React from 'react'

import type { TextBlock as TextBlockProps } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { Title } from '../../components/Title'

type Props = TextBlockProps

export const LicenseBlock: React.FC<Props> = ({ blocks, description, id }) => {

  return (
    <section className="space-y-6">
      <Title name="Licence libre" id={id} />
      <p className="text-base">{description}</p>
      <div className='space-y-4'>
        <RenderBlocks blocks={blocks} />
      </div>
      <p className='text-base'>Cette ressource est partagée librement avec la licence CC BY-SA 4.0.</p>
      <div className="space-y-1">
        <p><a href='#' className='underline'>Retrouvez toutes les modalités de partage de la ressource sur notre page dédiée.</a></p>
        <p><a href='#' className='underline'>Écrivez-nous vos questions et retours via notre formulaire de contact.</a></p>
      </div>
    </section>
  )
}
