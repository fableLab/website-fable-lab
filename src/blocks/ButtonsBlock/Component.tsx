import React from 'react'

import type { ButtonsBlock as ButtonsBlockProps } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'

export const ButtonsBlock: React.FC<Props> = ({ blocks, direction }) => {
  const isVertical = direction === 'vertical';

  return (
    <div
      className={`flex flex-wrap justify-center items-center gap-4 ${
        isVertical ? 'flex-col' : ''
      }`}
    >
      <RenderBlocks blocks={blocks} />
    </div>
  );
}
