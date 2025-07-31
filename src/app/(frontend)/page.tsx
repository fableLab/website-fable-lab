import type { Metadata } from 'next/types'
import { Menu, Search } from 'lucide-react'

export default async function Home() {
  return (
    <main className="min-h-screen bg-camelot-800 border-t border-white text-white px-6 py-10 grid grid-cols-12 gap-y-10">

      <div className="hidden md:flex md:col-start-3 md:col-span-3 items-start mr-4 mt-16">
        <img src="/zigzags/Calque_1.png" alt="Zigzag" />
      </div>
      <div className="col-span-12 md:col-start-6 md:col-span-7 space-y-4 md:mt-10">
        {/* Logo */}
        <div className="hidden md:flex">
          <img src="/logo/logo_white.png" alt="Fable Lab Logo" className="h-10 w-auto" />
        </div>
        {/* Title */}
        <h1 className="text-4xl font-semibold leading-tight">
          des projets culturels <br />
          pour faire société.
        </h1>
        {/* Mission Block */}
        <div className="col-span-12 lg:col-span-6 text-md space-y-2 !mb-4">
          <h2 className="text-xl font-bold mt-10">La mission de fable-Lab ?</h2>
          <p>
            Que chacun et chacune d’entre nous soit plus libre grâce aux mots.<br />
            Nous travaillons à promouvoir la lecture et l’écriture comme des <br />pratiques qui rassemblent.<br />
            Et nous contribuons à réduire les inégalités liées à une moindre maîtrise <br />de l’expression en français.
          </p>
        </div>
        {/* Search Box */}
        <div className="col-span-12 md:col-span-6 space-y-2 !mt-10">
          <p className="font-bold text-xl mb-4">Trouver votre ressource</p>

          <div className="flex items-center w-full md:w-5/6 relative">
            <Menu className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-camelot-800" />
            <input
              type="text"
              placeholder="Je cherche une ressource, une thématique, une information..."
              className="w-full h-16 rounded-full text-camelot-800 pl-16 pr-16 text-lg placeholder:text-camelot-800"
            />
            <Search className="absolute right-5 top-1/2 -translate-y-1/2 h-6 w-6 text-camelot-800" />
          </div>

          <div className="hidden md:flex w-5/6 justify-end pr-4">
            <img src="/vector/Vector.png" alt="Vector" className="mr-4 mt-6" />
          </div>
        </div>

      </div>
    </main>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: "Accueil | fable-Lab",
  }
}
