import type { PayloadRequest, CollectionSlug, GlobalSlug } from 'payload'

const collectionRoutes: Partial<Record<CollectionSlug, string>> = {
  pages:     '',
  projects:  '/projets',
  resources: '/ressources',
  labslangs: '/labslang'
}

const globalRoutes: Partial<Record<GlobalSlug, string>> = {
  LabsLangPage: '/labslang',
}

type Props =
  | { collection: keyof typeof collectionRoutes; slug: string; global?: never; req: PayloadRequest }
  | { global: keyof typeof globalRoutes; collection?: never; slug?: never; req: PayloadRequest }

export const generatePreviewPath = (props: Props): string => {
  const path = props.global
    ? (globalRoutes[props.global] ?? '/')
    : `${collectionRoutes[props.collection] ?? ''}/${props.slug}`

  const params = new URLSearchParams({
    slug: props.slug ?? '',
    collection: props.collection ?? '',
    global: props.global ?? '',
    path,
    previewSecret: process.env.PREVIEW_SECRET ?? '',
  })

  return `/next/preview?${params.toString()}`
}
