'use client';
import { cn } from '@/utilities/ui'
import PrintButton from '@/components/PrintButton'
import { ColorsList } from "@/constants/ColorMaps"


import { useEffect, useState } from 'react';
import Link from 'next/link';
type itemType = {
  id?: string;
  name: string;
  level: string;
  number: string;
};

export default function Summary({ mobileOnly = false, color }: { mobileOnly?: boolean, color?: ColorsList | null }) {
  const [items, setItems] = useState<itemType[]>([]);

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll('h2[data-summary-visible], h3[data-summary-visible], h4[data-summary-visible]'));

    const newItems: itemType[] = headings.map((h) => ({
      id: h.getAttribute('id') || undefined,
      name: h.getAttribute('data-summary-name') || h.textContent || '',
      number: h.getAttribute('data-summary-number') || '',
      level: h.tagName.toLowerCase(),
    }));

    setItems(newItems);
  }, []);

  return (
    items.length > 0 &&
    <div className={cn(
      "ms-8 me-16 mt-12 mb:mt-16 text-camelot-800 top-6 mb-8 md:mb-12",
      mobileOnly ? "md:hidden print:block" : "hidden md:block sticky"
    )}>
      <h3 className="text-xl underline ms-8 mb-2">Sommaire</h3>
      <ol className="list-none border-x border-t border-camelot-700 text-xl overflow-auto max-h-[65vh]">
        {items.map((item, index) => (
          <li key={index} className={cn("border-b border-camelot-700 py-2 pe-8",
            item.level === 'h2' && "px-8 font-bold", item.level === 'h3' && "ps-12", item.level === 'h4' && "ps-16")}>
            <Link href={`#${item.id}`} className='flex gap-2'>
              {item.number && <span className="md:hidden print:inline">{item.number}.</span>}
              {item.name}
            </Link>
          </li>
        ))}
      </ol>
      <div className="mx-auto mt-8 mb-12 flex justify-center items-center">
        { !mobileOnly && color && <PrintButton color={color||"violet"} /> }
      </div>
    </div >
  );
}
