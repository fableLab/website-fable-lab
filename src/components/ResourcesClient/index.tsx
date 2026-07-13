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
    description: string;
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
  const [query, setQuery] = useState('');
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

  const normalizedQuery = query.trim().toLowerCase();

  const filteredResources = initialResources.filter((r) => {
    if (
      normalizedQuery &&
      !r.name.toLowerCase().includes(normalizedQuery) &&
      !r.description.toLowerCase().includes(normalizedQuery)
    ) {
      return false;
    }

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
        <div className="md:col-span-3 col-span-12 bg-azure-100 px-6 pb-16">
          <h3 className="text-camelot-800 text-2xl font-bold my-4" >Chercher une ressource</h3>

          <div className="relative w-full mb-6">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="text-camelot-800 placeholder-camelot-800 bg-white rounded-full ps-5 pe-12 py-3 w-full outline-none focus:ring-0"
              placeholder="Rechercher une ressource..."
            />
            <svg className="w-6 h-6 text-camelot-800 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
              viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.8568 28.8919L18.4743 20.5094C17.809 21.0416 17.0439 21.463 16.179 21.7734C15.3142 22.0839 14.3939 22.2391 13.4181 22.2391C11.001 22.2391 8.95524 21.402 7.28095 19.7277C5.60667 18.0534 4.76953 16.0077 4.76953 13.5905C4.76953 11.1733 5.60667 9.1276 7.28095 7.45332C8.95524 5.77904 11.001 4.94189 13.4181 4.94189C15.8353 4.94189 17.881 5.77904 19.5553 7.45332C21.2296 9.1276 22.0668 11.1733 22.0668 13.5905C22.0668 14.5662 21.9115 15.4865 21.6011 16.3514C21.2906 17.2163 20.8693 17.9813 20.337 18.6466L28.7195 27.0291L26.8568 28.8919ZM13.4181 19.578C15.0813 19.578 16.4951 18.9959 17.6593 17.8317C18.8235 16.6674 19.4056 15.2537 19.4056 13.5905C19.4056 11.9273 18.8235 10.5136 17.6593 9.34936C16.4951 8.18512 15.0813 7.60301 13.4181 7.60301C11.7549 7.60301 10.3412 8.18512 9.177 9.34936C8.01276 10.5136 7.43064 11.9273 7.43064 13.5905C7.43064 15.2537 8.01276 16.6674 9.177 17.8317C10.3412 18.9959 11.7549 19.578 13.4181 19.578Z" fill="#802D45" />
            </svg>
          </div>

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

          <p className="text-camelot-800 text-xl font-bold my-4">Producteur</p>
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
                {filteredResources.length === 0 ? (
                  <p className="my-6">Désolé, aucune ressource ne correspond à cette recherche.</p>
                ) : (
                  <section className="my-6 columns-1 md:columns-3 2xl:columns-3 gap-12 *:mb-12">
                    {filteredResources.map(resource => (
                      <Resource key={resource.id} {...resource} />
                    ))}
                  </section>
                )}
              </div>
            </div>
          </article>
        </div>
      </aside>
    </>
  );
}
