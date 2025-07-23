import React from 'react';
import type { FrameCardBlock as PayloadCMSFrameCardProps } from '@/payload-types'
import type { Media } from '@/payload-types'

import RichText from '@/components/RichText';
import { borderPrimaryColorsMap, ColorsList } from "@/constants/ColorMaps"

type FrameCardProps = {
  title: PayloadCMSFrameCardProps['title'],
  body: PayloadCMSFrameCardProps['body'],
  image: Media
  color: ColorsList
};

export const FrameCardBlock: React.FC<FrameCardProps> = ({
  title,
  color,
  body,
  image,
}) => {
  return (
    <div className={`flex flex-col md:flex-row gap-6 border-[6px] p-8 rounded-[22px] w-4/5 m-auto ${borderPrimaryColorsMap[color]}`}>
      <div className={`${image ? 'w-2/3' : 'w-full'} space-y-4`}>
        <h3 className="font-bold text-2xl text-black">{title}</h3>
        {body && (
          <RichText data={body} enableGutter={false} />
        )}

      </div>
      {image && (
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <img
            src={image?.url || ""}
            className="rounded-2xl"
          />
        </div>
      )}
    </div>
  );
};
