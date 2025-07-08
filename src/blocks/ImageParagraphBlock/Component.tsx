import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'
import { Image } from '../../components/Image'
import { RenderBlocks } from '@/blocks/RenderBlocks'

import type { ContentBlock as ContentBlockProps } from '@/payload-types'

import { CMSLink } from '../../components/Link'

export const ImageParagraphBlock: React.FC<ContentBlockProps> = (props) => {
  const { title, body, image, buttons, orientation } = props
  const isImageLeft = orientation === 'left';

  return (
    <div className="grid grid-cols-12 gap-6">
      <div
        className={`col-span-12 lg:col-span-7 [&_h4]:text-lavender-400 ${
          isImageLeft ? 'order-2 lg:order-2' : 'order-1 lg:order-1'
        }`}
      >
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        {body && <RichText data={body} enableGutter={false} />}
        {buttons && (
          <div className="mt-4 w-full">
            <RenderBlocks blocks={buttons} />
          </div>
        )}
      </div>
      <div
        className={`col-span-12 lg:col-span-5 [&_h4]:text-lavender-400 ${
          isImageLeft ? 'order-1 lg:order-1' : 'order-2 lg:order-2'
        }`}
      >
        {image && (
          <Image
            media={image}
            className="border-[6px] border-solid border-lavender-400 rounded-xl"
            full={true}
          />
        )}
      </div>
    </div>
  );
}
