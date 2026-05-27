'use client'
import React, { useEffect, useState } from 'react'
import { useDebounce } from '@uidotdev/usehooks'
import Link from 'next/link'
import qs from 'qs'

export default function Home() {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 500)
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    if (!debouncedQuery) {
      setSearchResults([])
      return
    }

    const searchDocs = async () => {
      const q = {
        where: {
          or: [
            { title: { like: debouncedQuery } },
            { description: { like: debouncedQuery } },
          ],
        },
        limit: 6,
      }

      const response = await fetch(`/api/search?${qs.stringify(q)}`)
      const data = await response.json()
      setSearchResults(data?.docs || [])
    }

    searchDocs()
  }, [debouncedQuery])

  return (
    <section>
      <h3 className="font-bold mt-16 mb-6">Trouver votre ressource</h3>
      <div className="relative w-full my-6">
        <input
          type="text"
          className="text-camelot-800 placeholder-camelot-800 rounded-full ps-8 pe-16 py-6 w-full text-xl outline-none focus:ring-0"
          placeholder="Je cherche une ressource, une thématique, une information..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <svg className="w-8 h-8 text-camelot-800 absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none"
          viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.8568 28.8919L18.4743 20.5094C17.809 21.0416 17.0439 21.463 16.179 21.7734C15.3142 22.0839 14.3939 22.2391 13.4181 22.2391C11.001 22.2391 8.95524 21.402 7.28095 19.7277C5.60667 18.0534 4.76953 16.0077 4.76953 13.5905C4.76953 11.1733 5.60667 9.1276 7.28095 7.45332C8.95524 5.77904 11.001 4.94189 13.4181 4.94189C15.8353 4.94189 17.881 5.77904 19.5553 7.45332C21.2296 9.1276 22.0668 11.1733 22.0668 13.5905C22.0668 14.5662 21.9115 15.4865 21.6011 16.3514C21.2906 17.2163 20.8693 17.9813 20.337 18.6466L28.7195 27.0291L26.8568 28.8919ZM13.4181 19.578C15.0813 19.578 16.4951 18.9959 17.6593 17.8317C18.8235 16.6674 19.4056 15.2537 19.4056 13.5905C19.4056 11.9273 18.8235 10.5136 17.6593 9.34936C16.4951 8.18512 15.0813 7.60301 13.4181 7.60301C11.7549 7.60301 10.3412 8.18512 9.177 9.34936C8.01276 10.5136 7.43064 11.9273 7.43064 13.5905C7.43064 15.2537 8.01276 16.6674 9.177 17.8317C10.3412 18.9959 11.7549 19.578 13.4181 19.578Z" fill="#802D45" />
        </svg>
      </div>

      {debouncedQuery && searchResults.length === 0 && (
        <p className="text-xl">Désolé, aucun résultat ne correspond à cette recherche.</p>
      )}

      {searchResults.map((doc: any, index) => (
        <Link href={doc.url} key={index}>
          <div className="w-full p-4 mb-4 bg-white text-camelot-800 rounded-2xl
            transform transition-all duration-500 ease-out
                             hover:scale-105
            ">
            <h4 className="font-bold text-xl">{doc.title}</h4>
            <p className="text-lg">{doc.description}</p>
          </div>
        </Link>
      ))}
    </section>
  )
}
