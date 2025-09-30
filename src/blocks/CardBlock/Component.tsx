import React from 'react';
import type { FrameCardBlock as PayloadCMSFrameCardProps } from '@/payload-types'
import type { Media } from '@/payload-types'
import { cn } from '@/utilities/ui'
import Link from 'next/link'

import RichText from '@/components/RichText';
import { bgPrimaryColorsMap, borderPrimaryColorsMap, textColorsMap, ColorsList, TextColorsList, bgSecondaryColorsMap } from "@/constants/ColorMaps"

type CardBlockProps = {
  body: PayloadCMSFrameCardProps['body'],
  textColor?: TextColorsList,
  borderColor?: ColorsList,
  color: ColorsList
  link?: string
};

export const CardBlock: React.FC<CardBlockProps> = ({
  color,
  textColor,
  borderColor,
  body,
  link
}) => {
  return link ? (
    <Link href={link}>
      <div className={cn('p-8 rounded-[22px] m-auto',
        borderColor && ["border-[6px]", borderPrimaryColorsMap[borderColor]],
        textColor && textColorsMap[textColor], color && bgSecondaryColorsMap[color])
      }>
        {body && (
          <RichText data={body} enableGutter={false} />
        )
        }
      </div >
    </Link>
  ) : (
    <div className={cn('p-8 rounded-[22px] m-auto',
      borderColor && ["border-[6px]", borderPrimaryColorsMap[borderColor]],
      textColor && textColorsMap[textColor], color && bgSecondaryColorsMap[color])
    }>
      {body && (
        <RichText data={body} enableGutter={false} />
      )
      }
    </div >
  );
}
