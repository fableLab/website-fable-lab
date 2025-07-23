'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
type itemType = {
  id?: string;
  name: string;
  level: string;
};

export default function Summary() {
  const [items, setItems] = useState<itemType[]>([]);

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll('h2[data-summary-visible], h3[data-summary-visible]'));

    const newItems: itemType[] = headings.map((h) => ({
      id: h.getAttribute('id') || undefined,
      name: h.textContent || '',
      level: h.tagName.toLowerCase(),
    }));

    setItems(newItems);
  }, []);

  return (
    items.length > 0 &&
    <div className="hidden md:block ms-8 me-16 mt-16 text-camelot-800 sticky top-6 mb-12">
      <h3 className="text-xl underline ms-8 mb-2">Sommaire du projet</h3>
      <ol className="list-none border-x border-t border-camelot-700 text-xl overflow-auto max-h-[65vh]">
        {items.map((item, index) => (
          item.level === 'h2' ? (
            <li key={index} className="border-b border-camelot-700 py-2 px-8 font-bold">
              <Link href={`#${item.id}`}>{item.name}</Link>
            </li>
          ) : (
            <li key={index} className="border-b border-camelot-700 py-2 ps-12 pe-8">
              <Link href={`#sub-title-${item.id}`}>{item.name}</Link>
            </li>
          )
        ))}
      </ol>
    </div>
  );
}
