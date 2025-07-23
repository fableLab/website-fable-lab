import React from 'react'

import type { LicenseItemBlock as LicenseItemBlockProps } from '@/payload-types'

export const LicenseItemBlock: React.FC<LicenseItemBlockProps> = ({ title, description }) => {

  return (
    <div>
      <h4 className="font-extrabold">{title}</h4>
      <p>{description}</p>
    </div>
  )
}
