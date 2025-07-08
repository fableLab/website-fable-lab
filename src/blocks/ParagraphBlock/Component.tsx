import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { ContentBlock as ContentBlockProps } from '@/payload-types'

import { CMSLink } from '../../components/Link'

export const ParagraphBlock: React.FC<ContentBlockProps> = (props) => {
  const { orientation, body } = props

  const colsSpanClasses = {
    full: '12',
    center: '6',
    left: '6',
    right: '6',
  }
  const col = colsSpanClasses[orientation]


  return (
      <div className="grid grid-cols-12">

              <div
                className={cn(`col-span-12 lg:col-span-${col} [&_h4]:text-lavender-400`, {
                  'lg:col-start-4': orientation === 'center',
                  'lg:col-start-7': orientation === 'right'
                })}
              >
                {body && <RichText data={body} enableGutter={false} />}
              </div>
      </div>
  )
}
