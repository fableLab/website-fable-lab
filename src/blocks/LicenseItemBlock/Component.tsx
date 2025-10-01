import React from 'react'

import type { LicenseItemBlock as LicenseItemBlockProps } from '@/payload-types'

export const LicenseItemBlock: React.FC<LicenseItemBlockProps> = ({ title, description }) => {

  return (
    <div>
      <h4 className="font-extrabold !text-xl" >{title}</h4>
      <p className='!text-xl'>{description}</p>
    </div>
  )
}
