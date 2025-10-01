import React from 'react'
import { cn } from '@/utilities/ui'

import type { YoutubeVideoBlock as YoutubeVideoBlockProps } from '@/payload-types'
import { Align } from "@/components/Align"

export const YoutubeVideoBlock: React.FC<YoutubeVideoBlockProps> = ({ url, align, size = "md" }) => {

  const sizes: Record<string, string> = {
    'xs': 'w-1/4',
    'sm': 'w-1/2',
    'md': 'w-3/5',
    'lg': 'w-4/5',
    'xl': 'w-full'
  };

  return (
    <Align orientation={align}>
      <iframe className={cn(size && sizes[size], 'aspect-video mx-auto')} src={url} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" frameBorder="0" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
      </iframe>
    </Align >
  )
}
