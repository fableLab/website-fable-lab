import { cn } from '@/utilities/ui'
import type { Media as MediaProps } from '@/payload-types'
import { borderPrimaryColorsMap, ColorsList } from "@/constants/ColorMaps"

export const Image: React.FC<{ media: MediaProps, full?: boolean, borderColor: ColorsList, size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl', align?: string }> = (props) => {
  const {
    media,
    borderColor,
    size,
    align
  } = props

  const alignClass: Record<string, string> = {
    'left': 'justify-start',
    'center': 'justify-center',
    'right': 'justify-end',
  };

  const sizes: Record<string, string> = {
    'xs': 'w-1/4',
    'sm': 'w-1/2',
    'md': 'w-3/5',
    'lg': 'w-4/5',
    'xl': 'w-full'
  };

  return (
    <>
      {
        media?.url ?
          <div className={cn("flex", align && alignClass[align])}>
            <figure className={cn(size && sizes[size])} >
              <img src={media?.url} alt={media.alt || ""} className={cn('w-full border-8 border-solid rounded-xl', borderColor && borderPrimaryColorsMap[borderColor])} />
              <figcaption className="text-center">{media.alt}</figcaption>
            </figure >
          </div >
          :
          <p className="py-32 bg-camelot-100 text-center items-center text-camelot-800 w-1/2 mx-auto">
            <span className="font-bold text-xl">Oups 😅</span><br />
            L’image n’est pas là, mais les mots tiennent bon.<br />
            On va arranger ça très vite !
          </p >
      }
    </>
  );
}
