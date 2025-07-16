import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import ScrollToTop from './ScrollToTop.tsx'

export const getHrefFromLink = (link: {
  type: string
  url?: string
  reference?: {
    relationTo: string
    value?: { slug: string }
  }
}): string => {
  if (link.type === 'reference' && typeof link.reference?.value === 'object') {
    const { relationTo, value } = link.reference;
    const prefix = relationTo !== 'pages' ? `/${relationTo}` : '';
    return `${prefix}/${value.slug}`;
  }
  return link.url || '';
}

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const leftColumnLinks = footerData?.leftColumn || []
  const centerColumnLinks = footerData?.centerColumn || []
  const rightColumnLinks = footerData?.rightColumn || []

  const zigZagStyle = {
    borderImageSource: 'url("/zigzags/zigzag-footer.svg")',
    borderImageSlice: 52,
    borderImageRepeat: 'repeat',
  }

  return (
    <footer className="bg-camelot-800 grid grid-cols-12 text-white">
      <div className="md:col-span-3 col-span-12 px-8 pt-4 pb-8 md:border-r-[14px] border-white border-dashed"
        style={zigZagStyle}>
        <ul>
          {
              leftColumnLinks.map((item) => (
              <li className='mb-2 text-lg' key={item.id}>
                <Link href={getHrefFromLink(item.link)} className='mb-2 text-lg'>{item.link?.label}</Link>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="md:col-span-4 col-span-12 px-8 pt-4 pb-8 md:border-r-[14px] border-white border-dashed"
        style={zigZagStyle}>
        <ul>
          {
              centerColumnLinks.map((item) => (
              <li className='mb-2 text-lg' key={item.id}>
                <Link href={getHrefFromLink(item.link)} className='mb-2 text-lg'>{item.link?.label}</Link>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="md:col-span-4 col-span-12 px-8 pt-4 pb-8 md:border-r-[14px] border-white border-dashed"
        style={zigZagStyle}>
        <ul>
          {
              rightColumnLinks.map((item) => (
              <li className='mb-2 text-lg' key={item.id}>
                <Link href={getHrefFromLink(item.link)} className='mb-2 text-lg'>{item.link?.label}</Link>
              </li>
            ))
          }
        </ul>
      </div>
      <ScrollToTop />
    </footer>
  )
}
