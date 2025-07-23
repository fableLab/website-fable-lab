import { cn } from '@/utilities/ui'
import { bgPrimaryColorsMap, ColorsList } from "@/constants/ColorMaps"


export type BannerProps = {
  title: string,
  color: ColorsList
};

export default function Banner({ title, color }: BannerProps) {
  return (
    <h2 className={cn("text-4xl text-white font-bold pt-18 py-5 px-6", bgPrimaryColorsMap[color])}>
      {title}
    </h2>
  );
}
