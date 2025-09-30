import React from 'react'

import type { GridBlock as GridBlockProps } from '@/payload-types'
import { RenderGridBlocks } from '@/blocks/RenderGridBlocks'

export const GridBlock: React.FC<GridBlockProps> = ({ blocks }) => {

  return (
    <div className='flex'>
      {(blocks || []).map((block) => (
        <div key={block.id} className='flex-1 p-4'>
          <RenderGridBlocks blocks={block && [block]} />
        </div>
      ))}

    </div>
  )
}
