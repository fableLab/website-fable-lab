import React from 'react'
import { cn } from '@/utilities/ui'

import type { GridBlock as GridBlockProps } from '@/payload-types'
import { RenderGridBlocks } from '@/blocks/RenderGridBlocks'

export const GridBlock: React.FC<GridBlockProps> = ({ blocks }) => {

  return (
    <div className={cn(
      (blocks?.length || 0) > 5 ? "flex flex-col md:grid md:grid-cols-6" : "flex flex-col md:flex-row",
      "gap-8 md:gap-4"
    )}>
      {(blocks || []).map((block) => (
        <div key={block.id} className="flex-1">
          <RenderGridBlocks blocks={block && [block]} />
        </div>
      ))}

    </div >
  )
}
