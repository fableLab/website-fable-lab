'use client'

import { cn } from '@/utilities/ui'
import { bgPrimaryColorsMap, ColorsList } from "@/constants/ColorMaps"

export type PrintButtonProps = {
  color: ColorsList
};

export default function PrintButton({ color }: PrintButtonProps) {
  return (
    <button
      onClick={() => window.print()}
      className={cn(
        'rounded-full transition duration-200 w-2/3 group flex items-center justify-center text-base py-4 px-6',
        bgPrimaryColorsMap[color],
      )}
    >
      <span className="font-medium text-white">Télécharger <br/> cette page</span>
    </button>
  );
}
