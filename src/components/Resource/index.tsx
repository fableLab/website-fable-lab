import React from 'react'
import Link from 'next/link'
import type { Resource as PayloadCMSProjectBlockProps } from '@/payload-types'
import type { Media } from '@/payload-types'

function isMedia(value: number | Media): value is Media {
  return typeof value === 'object' && value !== null && 'url' in value;
}

export const Resource: React.FC<PayloadCMSProjectBlockProps> = (props) => {
  const {
    name,
    description,
    image,
    slug
  } = props


  return (
    <div className="mb-4">
      <Link href={`/resources/${slug}`}>
        <div className="rounded-xl w-full bg-azure-200 break-inside-avoid py-4">
          {isMedia(image) && <img className="w-full px-4 pb-2" src={image?.url || ""} />}
          <h5 className="text-azure-800 text-xl font-bold text-center">{name}</h5>
        </div>
      </Link>
    </div>
  )
}
