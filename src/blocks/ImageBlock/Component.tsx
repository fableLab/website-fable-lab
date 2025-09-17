import React from 'react'

import { Image } from '../../components/Image'
import { ColorsList } from "@/constants/ColorMaps"

import type { Media } from '@/payload-types'

type ImageBlockProps = {
  media: Media,
  borderColor: ColorsList
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  align: 'left' | 'center' | 'right'
};

export const ImageBlock: React.FC<ImageBlockProps> = ({ media, borderColor, size, align }) => {
  return (
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
