import React from 'react'

import type { TextBlock as TextBlockProps } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'

type Props = TextBlockProps

export const ButtonsBlock: React.FC<Props> = ({ blocks, direction }) => {
  const isVertical = direction === 'vertical';

  return (
    <div
      className={`flex flex-wrap justify-center items-center gap-2 ${
        isVertical ? 'flex-col' : ''
      }`}
    >
      <RenderBlocks blocks={blocks} />
    </div>
  );
}
