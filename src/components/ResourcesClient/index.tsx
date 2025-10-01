'use client';
import { useState } from 'react';
import { Resource } from '@/components/Resource';
import { cn } from '@/utilities/ui'

import Banner from '@/components/Banner/Banner'
import { Title } from '@/components/Title'
import { DividerBlock } from '@/blocks/DividerBlock/Component'

import type { Media, Language, Category } from '@/payload-types'

type Need =
  | "Accompagner"
  | "Animer un atelier"
  | "Animer une formation"
  | "Apprendre une langue"
  | "Communiquer"
  | "Écrire"
  | "Fabriquer"
  | "Se former"
  | "S’informer"
  | "Sensibiliser"
  | "Traduire";

type Linguistic =
  | "Analphabétisme"
  | "Illettrisme"
  | "Langage clair"
  | "Multilingue";

type Creator =
  | "fable-Lab"
  | "external";

type ResourcesClientProps = {
  initialResources: {
    id: number;
    slug?: string | null | undefined;
    name: string;
    image: number | Media;
    creators: ("fable-Lab" | "external")[];
    needs?: ("Accompagner" | "Animer un atelier" | "Animer une formation" | "Apprendre une langue" | "Communiquer" | "Écrire" | "Fabriquer" | "Se former" | "S’informer" | "Sensibiliser" | "Traduire")[] | null | undefined;
    linguistics?: ("Analphabétisme" | "Illettrisme" | "Langage clair" | "Multilingue")[] | null | undefined;
    languages?: (number | Language)[] | null | undefined;
    categories?: (number | Category)[] | null | undefined;
  }[];
  languages: {
    id: number;
    name: string;
    code: string;
  }[];
  categories: {
    id: number;
    name: string;
  }[];
};

function isLanguage(lang: number | Language): lang is Language {
  return typeof lang === 'object' && lang !== null && 'code' in lang;
}

function isCategory(cat: number | Category): cat is Category {
  return typeof cat === 'object' && cat !== null && 'name' in cat;
}

export default function ResourcesClient({ initialResources, languages, categories }: ResourcesClientProps) {
  const [filters, setFilters] = useState<{ [key: string]: string[] }>({
    needs: [],
    linguistics: [],
    languages: [],
    categories: [],
    creators: []
  });

  const toggleFilter = (category: string, value: string) => {
    setFilters((prev) => {
      const values = prev[category] || [];
      return {
        ...prev,
        [category]: values.includes(value)
          ? values.filter((v) => v !== value)
          : [...values, value],
      };
    });
  };

  type FilterKeys = "needs" | "linguistics" | "languages" | "categories" | "creators";

  type FilterMap = {
    needs: Need[];
    linguistics: Linguistic[];
    languages: Language[];
    categories: Category[];
    creators: Creator[];
  };

  const filteredResources = initialResources.filter((r) => {
    return (Object.entries(filters) as [FilterKeys, string[]][])
      .every(([category, values]) => {
        if (values.length === 0) return true;

        switch (category) {
          case "languages":
            return r.languages?.some(lang => isLanguage(lang) && values.includes(lang.code));
          case "categories":
            return r.categories?.some(cat => isCategory(cat) && values.includes(cat.name));
          default: {
            const items = r[category] as FilterMap[typeof category] | undefined;
            return items?.some((item) => values.includes(item as string));
          }
        }
      });
  });

  return (
    <>
      <aside className="grid grid-cols-12 flex-grow">
        <div className="md:col-span-3 col-span-12 bg-azure-100 px-6 py-16">
          <h3 className="text-camelot-800 text-2xl font-bold mb-4" >Chercher une ressource</h3>

          <aside className='text-azure-800'>
            <div className="flex gap-4">
              <button
                onClick={() => toggleFilter("creators", "fable-Lab")}
                className={cn("px-4 py-2 rounded-xl", filters.creators.includes("fable-Lab") ? 'bg-azure-800 text-white' : 'bg-white')}
              >
                Ressource fable-Lab
              </button>

              <button
                onClick={() => toggleFilter("creators", "external")}
                className={cn("px-4 py-2 rounded-xl", filters.creators.includes("external") ? 'bg-azure-800 text-white' : 'bg-white')}
              >
                Ressource extérieure
              </button>
            </div>
          </aside>

          <p className="text-camelot-800 text-xl font-bold my-4">Besoins</p>
          <aside className='text-azure-800'>
            {['Accompagner', 'Animer un atelier', 'Animer une formation', 'Apprendre une langue', 'Communiquer', 'Écrire', 'Fabriquer', 'Se former', 'S’informer', 'Sensibiliser', 'Traduire'].map(need => (
              <label key={need} className='block'>
                <input
                  type="checkbox"
                  className='border-2 border-azure-800 rounded bg-transparent me-2'
                  value={need}
                  checked={filters.needs.includes(need)}
                  onChange={() => toggleFilter("needs", need)}
                />
                {need}
              </label>
            ))}
          </aside>

          <p className="text-camelot-800 text-xl font-bold my-4">Langages</p>

          <aside className='text-azure-800'>
            {['Analphabétisme', 'Illettrisme', 'Langage clair', 'Multilingue'].map(linguistic => (
              <label key={linguistic} className='block'>
                <input
                  type="checkbox"
                  className="border-2 border-azure-800 rounded bg-transparent me-2"
                  value={linguistic}
                  checked={filters.linguistics.includes(linguistic)}
                  onChange={() => toggleFilter("linguistics", linguistic)}
                />
                {linguistic}
              </label>
            ))}
          </aside>
          <p className="text-camelot-800 text-xl font-bold my-4">Langues</p>

          <aside className='text-azure-800'>
            {languages.map(language => (
              <label key={language.code} className='block'>
                <input
                  type="checkbox"
                  className='border-2 border-azure-800 rounded bg-transparent me-2'
                  value={language.code}
                  checked={filters.languages.includes(language.code)}
                  onChange={() => toggleFilter("languages", language.code)}
                />
                {language.name}
              </label>
            ))}
          </aside>

          <p className="text-camelot-800 text-xl font-bold my-4">Thématiques</p>

          <aside className='text-azure-800'>
            {categories.map(category => (
              <button
                key={category.name}
                type="button"
                onClick={() => toggleFilter("categories", category.name)}
                className={`px-3 py-1 rounded-2xl me-2 mb-2 text-white uppercase text-sm
                  ${filters.categories.includes(category.name)
                    ? " bg-azure-800"
                    : " bg-azure-800/35"
                  }`}
              >
                {category.name}
              </button>
            ))}
          </aside>
        </div>
        <div className="md:col-span-9 col-span-12">
          <article className="pb-24">
            <Banner title="Les ressources" color="blue" />
            <div className="flex flex-col pt-8 px-6 md:px-12 2xl:px-32 2xl:mr-32
            [&_h2]:text-azure-800 [&_h3]:text-azure-800 [&_h4]:text-azure-800 [&_p]:text-2xl text-black [&_a]:text-azure-800 [&_strong]:text-azure-800
            [&_h4]:text-3xl [&_h4]:font-bold">
              <div>
                <p>Chez fable-Lab, nous imaginons, nous prototypons et nous développons <strong>des ressources de médiation vers l’expression écrite et orale.</strong></p>
                <p>Toutes ces ressources sont pensées et conçues avec les personnes qui sont amenées à les utiliser !</p>
              </div>

              <DividerBlock color='yellow' className="my-12" />

              <div>
                <Title name="Toutes les ressources" />
                <section className="my-6 columns-1 md:columns-3 2xl:columns-3 gap-12 *:mb-12">
                  {filteredResources.map(resource => (
                    <Resource key={resource.id} {...resource} />
                  ))}
                </section>
              </div>
            </div>
          </article>
        </div>
      </aside>
    </>
  );
}
