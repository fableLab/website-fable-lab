import React from 'react'
import Link from "next/link"
import Image from "next/image"

import type { MediaBlock as MediaBlockProps } from '@/payload-types'

type Props = MediaBlockProps

export const ButtonDownloadBlock: React.FC<Props> = (props) => {
  const {
    media,
    label
  } = props

  const colorAndCursor = media?.url ? "bg-bees-400 hover:bg-bees-200" : "bg-gray-200 cursor-not-allowed pointer-events-none text-red-400"

  return (
    <button>
      <Link
        download
        href={media?.url || "#"}
        target="_blank"
        className={`${colorAndCursor}
        rounded-full transition duration-200 block max-w-60
        grid grid-cols-6 gap-0 items-center place-items-center text-base
        py-4 px-6 group`}
      >
        <div className="col-span-5">
          <span className="text-center font-medium px-2 text-black">{!media?.url && "Fichier indisponible:"} {label}</span>
        </div>
        <div className="col-span-1 text-center relative w-9 h-9">
          {/* Icône normale */}
          <Image
            src="/arrows/arrow-down-icon.svg"
            alt="icon"
            width={36}
            height={36}
            className="absolute inset-0 transition-opacity duration-200 opacity-100 group-hover:opacity-0"
          />
          {/* Icône au survol */}
          <Image
            src="/arrows/arrow-down-zigzag-icon.svg"
            alt="icon hover"
            width={36}
            height={36}
            className="absolute inset-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100"
          />
        </div>
      </Link>
    </button>
  )
}
