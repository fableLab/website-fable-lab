import React from 'react'
import Link from 'next/link'
import Image from "next/image";

type Props = {
    label: string
    url: string
}

export const ButtonLinkBlock: React.FC<Props> = ({ label, url }) => {
   return (
    <button>
      <Link className="rounded-full transition duration-200 w-60 group
       grid grid-cols-6 gap-0 items-center place-items-center text-base bg-lavender-400 hover:bg-lavender-200 py-4 px-6" href={url} >
        <div className="col-span-5">
          <span className="text-center font-medium px-2 text-black">{label}</span>
        </div>
        <div className="col-span-1 text-center relative w-9 h-9">
          {/* Icône normale */}
          <Image
            src="/arrows/arrow-right-icon.png"
            alt="icon"
            width={36}
            height={36}
            className="absolute inset-0 transition-opacity duration-200 opacity-100 group-hover:opacity-0"
          />
          {/* Icône au survol */}
          <Image
            src="/arrows/arrow-right-zigzag-icon.png"
            alt="icon hover"
            width={36}
            height={36}
            className="absolute inset-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100"
          />
        </div>
      </Link>
    </button>
  );
}
