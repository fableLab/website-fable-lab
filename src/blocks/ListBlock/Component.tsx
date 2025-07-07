import React from 'react'

import type { TextBlock as TextBlockProps } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'
type Props = TextBlockProps

export const ListBlock: React.FC<Props> = ({ blocks }) => {

  return (
      <div className='space-y-5'>
        <ul className="list-disc w-2/3 m-auto">
          <RenderBlocks blocks={blocks} />
        </ul>
      </div>
  )
}
