import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { ParagraphBlock as ParagraphBlockProps } from '@/payload-types'

export const ParagraphBlock: React.FC<ParagraphBlockProps> = ({ orientation, body }) => {

  const colsSpanClasses = {
    full: '12',
    center: '8',
    left: '8',
    right: '8',
  }
  const col = colsSpanClasses[orientation]

  return (
    <div className="grid grid-cols-12">
      <div
        className={cn(`col-span-12 lg:col-span-${col}`, {
          'lg:col-start-3': orientation === 'center',
          'lg:col-start-5': orientation === 'right'
        })}
      >
        {body && <RichText data={body} enableGutter={false} />}
      </div>
    </div>
  )
}
