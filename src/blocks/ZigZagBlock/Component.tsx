import React from 'react';
import { cn } from '@/utilities/ui'
import { strokePrimaryColorsMap, ColorsList } from "@/constants/ColorMaps"

type ZigZagBlockProps = {
  color: ColorsList,
  className?: string
};

export const ZigZagBlock: React.FC<ZigZagBlockProps> = ({
  color,
  className
}) => {
  return (
    <div className={cn("w-full flex items-center justify-center", className)}>
      < svg className={strokePrimaryColorsMap[color]} width="126" height="150" viewBox="0 0 126 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.46031 132.85C7.46031 123.58 122.07 123.58 122.07 114.3C122.07 105.03 7.46031 105.03 7.46032 95.7501C7.46032 86.4801 122.07 86.4801 122.07 77.2001C122.07 67.9301 7.46032 67.9301 7.46032 58.6501C7.46032 49.3701 122.07 49.3801 122.07 40.1001C122.07 30.8201 7.46032 30.8201 7.46032 21.5501C7.46032 12.2701 122.07 12.2701 122.07 3.00009" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" />
        <path d="M24.6504 146.32L4.93039 131.61L19.5304 112.04" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" />
      </svg>
    </div >

  );
};
