import React from 'react'
import RichText from '@/components/RichText'

import type { TextBlock as TextBlockProps } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'

type Props = TextBlockProps

export const ListItemBlock: React.FC<Props> = (props) => {
  const {
    id, richText, buttons
  } = props

  return (
    <li>
      { richText && <RichText data={richText} enableGutter={false} className="inline-block align-top" /> }
      <RenderBlocks blocks={buttons} />
    </li>
  )
}
