import React from 'react';
import { FrameCardType } from '@/payload-types';
import RichText from '@/components/RichText';
import { Image } from '@/components/Image';

type FrameCardColor = 'yellow' | 'violet' | 'blue' | 'orange' | 'prune';

const borderColorsMap: Record<FrameCardColor, string> = {
  yellow: 'border-bees-400',
  violet: 'border-lavender-400',
  blue: 'border-azure-400',
  orange: 'border-cinnabar-400',
  prune: 'border-camelot-800',
};

export const FrameCardBlock: React.FC<FrameCardType> = ({
  title,
  color,
  body,
  image,
}) => {

  return (
    <div className={`flex flex-col md:flex-row gap-6 border-[6px] p-8 rounded-[22px] w-4/5 m-auto ${borderColorsMap[color]}`}>
      <div className={`${image ? 'w-2/3' : 'w-full'} space-y-4`}>
        <h3 className="font-bold text-2xl text-black">{title}</h3>
        {body && (
          <RichText data={body} enableGutter={false} />
        )}

      </div>
      {image && (
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <img
            src={image?.url}
          />
        </div>
      )}
    </div>
  );
};
