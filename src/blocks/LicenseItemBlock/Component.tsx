import React from 'react'

import type { TextBlock as TextBlockProps } from '@/payload-types'

type Props = TextBlockProps

export const LicenseItemBlock: React.FC<Props> = (props) => {
  const {
    title, description
  } = props

  return (
    <div>
      <h4 className="font-extrabold">{ title }</h4>
      <p>{ description }</p>
    </div>
  )
}
