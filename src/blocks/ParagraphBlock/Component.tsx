import React from 'react'
import RichText from '@/components/RichText'
import { Align } from '@/components/Align'


import type { ParagraphBlock as ParagraphBlockProps } from '@/payload-types'

export const ParagraphBlock: React.FC<ParagraphBlockProps> = ({ orientation, body }) => {

  return (
    <Align orientation={orientation}>
      {body && <RichText data={body} enableGutter={false} />}
    </Align>
  )
}
