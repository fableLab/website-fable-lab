import React from 'react'
import Link from 'next/link'

export const Project: React.FC<{ title?: string }> = (props) => {
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
          <img className="w-full" src={image?.url} />
          <p className="px-4 py-5 text-black">{description}</p>
        </div>
      </Link>
    </div>
  )
}
