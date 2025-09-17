import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'
import { Image } from '../../components/Image'
import { RenderBlocks } from '@/blocks/RenderBlocks'

import type { ImageParagraphBlock as PayloadCMSImageParagraphBlockProps } from '@/payload-types'
import type { Media as MediaBlock } from '@/payload-types'

type ImageParagraphBlockProps = {
  image: MediaBlock
  title: PayloadCMSImageParagraphBlockProps['title'],
  body: PayloadCMSImageParagraphBlockProps['body'],
  buttons: PayloadCMSImageParagraphBlockProps['buttons'],
  orientation: PayloadCMSImageParagraphBlockProps['orientation'],
};


export const ImageParagraphBlock: React.FC<ImageParagraphBlockProps> = ({ title, body, image, buttons, orientation }) => {
  const isImageLeft = orientation === 'left';

  return (
    <div className="grid grid-cols-12 gap-6">
      <div
        className={cn(
          "col-span-12 lg:col-span-7",
          isImageLeft ? "order-2 lg:order-2" : "order-1 lg:order-1"
        )}
      >
        <h4 className="mb-2">{title}</h4>
        {body && <RichText data={body} enableGutter={false} />}
        {buttons && (
          <div className="mt-6 w-full">
            <RenderBlocks blocks={buttons} />
          </div>
        )}
      </div>
      <div
        className={cn(
          "col-span-12 lg:col-span-5",
          isImageLeft ? "order-1 lg:order-1" : "order-2 lg:order-2"
        )}
      >
        {image && (
          <Image
            size="xl"
            media={image}
            full={true}
            borderColor='prune'
          />
        )}
      </div>
    </div>
  );
}
