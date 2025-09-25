import React from 'react'
import Link from 'next/link'
import type { Resource as PayloadCMSProjectBlockProps } from '@/payload-types'
import type { Media, Category, Language } from '@/payload-types'

function isMedia(value: number | Media): value is Media {
  return typeof value === 'object' && value !== null && 'url' in value;
}

type ResourceProps = {
  id: number;
  slug?: string | null | undefined;
  name: string;
  image: number | Media;
  creators: ("fable-Lab" | "external")[];
  needs?: ("Accompagner" | "Animer un atelier" | "Animer une formation" | "Apprendre une langue" | "Communiquer" | "Écrire" | "Fabriquer" | "Se former" | "S’informer" | "Sensibiliser" | "Traduire")[] | null | undefined;
  linguistics?: ("Analphabétisme" | "Illettrisme" | "Langage clair" | "Multilingue")[] | null | undefined;
  languages?: (number | Language)[] | null | undefined;
  categories?: (number | Category)[] | null | undefined;
}

export const Resource: React.FC<ResourceProps> = (props) => {
  const {
    name,
    image,
    slug,
    categories
  } = props

  function isCategory(cat: number | Category): cat is Category {
    return typeof cat === 'object' && cat !== null && 'name' in cat;
  }

  return (
    <div className="mb-4">
      <Link href={`/resources/${slug}`}>
        <div className="rounded-xl w-full bg-azure-100 break-inside-avoid p-4">
          {isMedia(image) && <img className="w-full pb-2 rounded-xl" src={image?.url || ""} />}
          <h5 className="text-azure-800 text-xl font-bold text-center mb-2">{name}</h5>

          <aside className='text-azure-800 text-center'>
            {categories?.filter(isCategory) && categories.map(category => (
              <button
                key={(category as Category).id}
                className="px-3 py-1 rounded-2xl me-2 mb-2 bg-white bg-azure-800 text-sm uppercase">
                {(category as Category).name}
              </button>
            ))}
          </aside>
        </div>
      </Link>
    </div>
  )
}
