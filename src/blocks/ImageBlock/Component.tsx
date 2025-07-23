import React from 'react'

import { Image } from '../../components/Image'
import type { Media } from '@/payload-types'

type ImageBlockProps = {
  media: Media
};

export const ImageBlock: React.FC<ImageBlockProps> = ({ media }) => {
  return (
    media && (
      <Image
        media={media}
      />
    )
  )
}
