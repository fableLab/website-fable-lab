import React from 'react'

import type { TextBlock as TextBlockProps } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'

type Props = TextBlockProps

export const ButtonsBlock: React.FC<Props> = ({ blocks }) => {

  return (
    <div className="flex flex-wrap justify-center items-center gap-6">
      <RenderBlocks blocks={blocks} />
    </div>
  )
}
