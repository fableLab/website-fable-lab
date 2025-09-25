import React from 'react'

import type { YoutubeVideoBlock as YoutubeVideoBlockProps } from '@/payload-types'

export const YoutubeVideoBlock: React.FC<YoutubeVideoBlockProps> = ({ url }) => {
  return (
    <div>
      <iframe className='w-1/2 aspect-video mx-auto' src={url} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" frameBorder="0" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

      </iframe>
    </div>
  )
}
