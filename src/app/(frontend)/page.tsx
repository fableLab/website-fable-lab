import type { Metadata } from 'next'
import PageClient from './page.client'

export default function Home() {
  return (
    <div className='text-white'>
      <div className='relative'>
        <img src="/backgrounds/home.jpg" className='w-full object-cover h-[75vh]' />
        <div className="absolute md:ml-[30%] ml-[15%] me-[15%] md:me-[20%] top-[30%] md:top-[45%]">
          <img src="logo/logo_white.png" className='md:w-3/5 w-4/5 mb-4' />
          <h2 className="text-5xl md:text-6xl 2xl:text-9xl font-bold font-serif break-words">des projets culturels pour faire société.</h2>
        </div>

        <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/12 md:w-1/12'>
          <svg viewBox="0 0 122 137" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.69469 133.238C3.69469 123.968 118.305 123.968 118.305 114.688C118.305 105.418 3.69469 105.418 3.69469 96.1383C3.69469 86.8683 118.305 86.8683 118.305 77.5883C118.305 68.3183 3.69469 68.3183 3.69469 59.0383C3.69469 49.7583 118.305 49.7683 118.305 40.4883C118.305 31.2083 3.6947 31.2083 3.6947 21.9383C3.6947 12.6583 118.305 12.6583 118.305 3.38832"
              stroke="#FEEB1A"
              strokeWidth="6"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <main className="bg-camelot-800 min-h-[75vh] flex items-center text-3xl 2xl:text-4xl">
        <div className='md:ml-[30%] ml-[15%] me-[15%] md:me-[20%] leading-10 py-48'>
          <h3 className="font-bold">La mission de fable-Lab ?</h3>
          <br />
          <p>Que chacun et chacune d’entre nous soit plus libre grâce aux mots.</p>
          <p>Nous travaillons à promouvoir la lecture et l’écriture comme des pratiques qui rassemblent.</p>
          <p>Et nous contribuons à réduire les inégalités liées à une moindre maîtrise de l’expression en français.</p>

          <PageClient />
        </div>
      </main>
    </div >
  )
}

export function generateMetadata(): Metadata {
  return {
    title: "Accueil | fable-Lab",
  }
}
