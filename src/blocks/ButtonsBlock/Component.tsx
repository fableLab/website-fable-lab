import React from 'react'

import type { ButtonsBlock as ButtonsBlockProps } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { Align } from '@/components/Align'

export const ButtonsBlock: React.FC<ButtonsBlockProps> = ({ blocks, direction, align }) => {
  const isVertical = direction === 'vertical';

  return (
    <Align orientation={align}>
      <div
        className={`flex flex-wrap justify-center items-center gap-4 ${isVertical ? 'flex-col' : ''
          }`}
      >
        <RenderBlocks blocks={blocks ?? []} />
      </div>
    </Align>
  );
}
