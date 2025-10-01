import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'Des projets culturels pour faire société.',
  images: [
    {
      url: `${getServerSideURL()}/projets-screenshot.png`,
    },
  ],
  siteName: 'fable-Lab',
  title: 'fable-Lab',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
