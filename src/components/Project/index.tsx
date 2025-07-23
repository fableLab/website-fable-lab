import React from 'react'
import Link from 'next/link'
import type { Project as PayloadCMSProjectBlockProps } from '@/payload-types'
import type { Media } from '@/payload-types'

// type ProjectBlockProps = {
//   name: PayloadCMSProjectBlockProps['name'],
//   description: PayloadCMSProjectBlockProps['description'],
//   slug?: string,
//   image: Media
// };

function isMedia(value: number | Media): value is Media {
  return typeof value === 'object' && value !== null && 'url' in value;
}

export const Project: React.FC<PayloadCMSProjectBlockProps> = (props) => {
  const {
    name,
    description,
    image,
    slug
  } = props


  return (
    <div className="mb-4">
      <Link href={`/projects/${slug}`}>
        <div className="border rounded-xl border-camelot-700 w-full bg-gray-100 break-inside-avoid hover:shadow-[0px_0px_10px_6px_#FEEB1A]">
          <h5 className="text-camelot-800 text-2xl font-bold px-4 py-2">{name}</h5>
          {isMedia(image) && <img className="w-full" src={image?.url || ""} />}
          <p className="px-4 py-5 text-black">{description}</p>
        </div>
      </Link>
    </div>
  )
}
