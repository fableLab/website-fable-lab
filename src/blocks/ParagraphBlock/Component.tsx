import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { ContentBlock as ContentBlockProps } from '@/payload-types'

import { CMSLink } from '../../components/Link'

export const ParagraphBlock: React.FC<ContentBlockProps> = (props) => {
  const { orientation, body } = props

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
