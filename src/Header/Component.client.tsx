'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { cn } from '@/utilities/ui'

import type { Header } from '@/payload-types'

interface HeaderClientProps {
  data: Header
}

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

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const [headerFullPage, setHeaderFullPage] = useState(false)

  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <>
      <header className={cn("bg-camelot-800 h-dvh w-full fixed", headerFullPage ? "" : "hidden")}>
      </header>

      <header className="h-20 bg-camelot-800 grid grid-cols-12 border-3 border-white z-20">
        <div className="md:col-span-3 col-span-12 flex items-center h-20">
          <Link href="/" className='flex-1'>
            <img src="/logo/logo_white.png" alt="Logo white" className="h-8 ms-4 p-1" />
          </Link>

          <Image
            src={cn(headerFullPage ? "/icons/close.svg" : "/icons/menu.svg")}
            width={32}
            height={32}
            className="float-righ flex-none mr-4 md:hidden"
            alt="Menu icon"
            onClick={() => { setHeaderFullPage(prev => !prev) }}
          />
        </div>

        <nav className={cn("md:col-span-9 col-span-12 md:flex flex-row items-center h-full ms-4 md:ms-0", headerFullPage ? "" : "hidden")}>
          {data.links?.map((link) =>
            link.type === 'singleLink' ? (
              <div
                key={link.id}
                className="md:flex-1 md:h-full md:border-l-[3px] border-white md:flex items-center justify-center relative"
              >
                <Link
                  href={
                    link.singleLink?.link
                      ? getHrefFromLink(link.singleLink?.link as { type: string })
                      : "#"
                  }
                  onClick={() => setHeaderFullPage(false)}
                  className="text-white text-center md:w-full inline-block py-5 text-2xl"
                >
                  {link.singleLink?.link.label}
                </Link>
              </div>
            ) :
              <div key={link.id}
                className="md:flex-1 md:h-full md:border-l-[3px] border-white md:flex justify-center relative"
              >
                <Menu>
                  <div className="flex items-center h-full">
                    <MenuButton className="md:w-full text-white text-center inline-block py-5 text-2xl cursor-pointer">
                      {link.label}
                    </MenuButton>
                  </div>

                  <MenuItems
                    transition
                    className="md:absolute left-0 top-full origin-top-right bg-camelot-800 ring-3 ring-white w-full transition focus:outline-none"
                  >
                    {link.listLink?.map((subLink) => (
                      <Link
                        href={
                          subLink?.link
                            ? getHrefFromLink(subLink?.link as { type: string })
                            : "#"
                        }
                        key={subLink.id}
                        onClick={() => setHeaderFullPage(false)}
                        className="w-full block py-5 md:ring ring-3 ring-white bg-camelot-800 text-white md:text-center text-2xl md:ms-0 ms-8"
                      >
                        <MenuItem>
                          <span>{subLink.link?.label}</span>
                        </MenuItem>
                      </Link>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
          )}
        </nav>
      </header>
    </>
  )
}
