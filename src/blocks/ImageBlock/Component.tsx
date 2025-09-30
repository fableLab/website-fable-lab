import React from 'react'
import Link from 'next/link'

import { Image } from '../../components/Image'
import { ColorsList } from "@/constants/ColorMaps"

import type { Media } from '@/payload-types'

type ImageBlockProps = {
  media: Media,
  borderColor: ColorsList
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  align: 'left' | 'center' | 'right',
  link: string
};

export const ImageBlock: React.FC<ImageBlockProps> = ({ media, borderColor, size, align, link }) => {
  return link ? (
    <Link href={link}>
      <Image
        size={size}
        align={align}
        borderColor={borderColor}
        media={media}
      />
    </Link>
  ) : (
    media && (
      <Image
        size={size}
        align={align}
        borderColor={borderColor}
        media={media}
      />
    )
  )
}
