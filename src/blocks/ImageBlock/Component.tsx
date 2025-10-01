import React from 'react'
import Link from 'next/link'

import { Image } from '../../components/Image'
import { ColorsList } from "@/constants/ColorMaps"

import type { Media } from '@/payload-types'
import { Align } from '@/components/Align'

type ImageBlockProps = {
  media: Media,
  borderColor: ColorsList
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  align: 'left' | 'center' | 'right' | 'full' | null,
  link: string
};

export const ImageBlock: React.FC<ImageBlockProps> = ({ media, borderColor, size, align, link }) => {
  return (
    <Align orientation={align}>
      {link ? (
        <Link href={link}>
          <Image
            size={size}
            borderColor={borderColor}
            media={media}
          />
        </Link>
      ) : (
        media && (
          <Image
            size={size}
            borderColor={borderColor}
            media={media}
          />
        ))}
    </Align>
  )
}
