'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

const headerLinks = [
  {
    label: "L'association", subLinks: [
      { label: 'Manifeste', href: "/pages/manifeste" },
      { label: 'Notre histoire', href: "/pages/notre-histoire" },
      { label: 'Notre équipe', href: "/pages/notre-equipe" },
      { label: 'Nos savoir-faire', href: "/pages/nos-savoir-faire" },
      { label: "Les rapports d'activités", href: "/pages/rapports-d-activites" },
      { label: "La communauté fable-lab", href: "/pages/communaute-fable-lab" }
    ]
  },
  {
    label: "Projets", subLinks: [
      { label: 'Médiation linguistique', href: "/projets" },
      { label: 'Médiation littéraire', href: "/projets" },
      { label: 'Tous les projets', href: "/projets" }
    ]
  },
];

const headerBasicLinks = [
  { label: "Ressources", href: "/ressources" },
  { label: "Contact", href: "/contact" },
  { label: "Boutique", href: "https://boutique.fable-lab.org/" }
];

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
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
    <header className="h-20 bg-camelot-800 grid grid-cols-12 border-3 border-white">
      <div className="md:col-span-3 col-span-12 flex items-center h-full">
        <Link href="/">
          <img src="/logo/logo_white.png" alt="Logo white" className="h-8 ms-4 p-1" />
        </Link>
      </div>

      <nav className="md:col-span-9 col-span-0 md:visible invisible flex flex-row items-center h-full">
        {headerLinks.map((link) => (
          <div
            key={link.label}
            className="flex-1 h-full border-l-[3px] border-white hidden md:flex justify-center relative"
          >
            <Menu>
              <div className="flex items-center h-full">
                <MenuButton className="w-full text-white text-center inline-block py-5 text-2xl cursor-pointer w-full">
                  {link.label}
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute left-0 top-full origin-top-right bg-camelot-800 ring-3 ring-white w-full transition focus:outline-none"
              >
                {link?.subLinks?.map((subLink) => (
                  <Link
                    href={subLink.href}
                    key={subLink.label}
                    className="w-full block py-5 ring ring-3 ring-white bg-camelot-800 text-white text-center text-2xl"
                  >
                    <MenuItem>
                      <span>{subLink.label}</span>
                    </MenuItem>
                  </Link>
                ))}
              </MenuItems>
            </Menu>
          </div>
        ))}

        {headerBasicLinks.map((link, key) => (
          <div key={key} className="flex-1 h-full border-l-[3px] border-white hidden md:flex items-center justify-center relative">
            <Link
              href={link.href}
              className="text-white text-center w-full inline-block py-5 text-2xl"
            >
              {link.label}
            </Link>
          </div>
        ))}
      </nav>
    </header>
  )
}
