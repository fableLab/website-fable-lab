import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { s3Storage } from '@payloadcms/storage-s3'

import { Plugin } from 'payload'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { seoPlugin } from '@payloadcms/plugin-seo'
// import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
// import { searchFields } from '@/search/fieldOverrides'
// import { searchPlugin } from '@payloadcms/plugin-search'
// import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
// import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
// import { redirectsPlugin } from '@payloadcms/plugin-redirects'

// import { revalidateRedirects } from '@/hooks/revalidateRedirects'
// import { beforeSyncWithSearch } from '@/search/beforeSync'

import { Page, Project } from '@/payload-types'
import { getServerSideURL } from '@/utilities/getURL'

type Titleable = { title?: string; name?: string }

const generateTitle: GenerateTitle<Titleable> = ({ doc }) => {
  return (doc?.title || doc?.name) ? `${(doc?.title || doc?.name)} | fable-Lab` : 'fable-Lab'
}

const generateURL: GenerateURL<Project | Page> = ({ doc }) => {
  const url = getServerSideURL()

  return doc?.slug ? `${url}/${doc.slug}` : url
}

export const plugins: Plugin[] = [
  // redirectsPlugin({
  //   collections: ['pages', 'posts'],
  //   overrides: {
  //     // @ts-expect-error - This is a valid override, mapped fields don't resolve to the same type
  //     fields: ({ defaultFields }) => {
  //       return defaultFields.map((field) => {
  //         if ('name' in field && field.name === 'from') {
  //           return {
  //             ...field,
  //             admin: {
  //               description: 'You will need to rebuild the website when changing this field.',
  //             },
  //           }
  //         }
  //         return field
  //       })
  //     },
  //     hooks: {
  //       afterChange: [revalidateRedirects],
  //     },
  //   },
  // }),
  // nestedDocsPlugin({
  //   collections: ['categories'],
  //   generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
  // }),
  seoPlugin({
    generateTitle,
    generateURL,
  }),
  ...(process.env.S3_BUCKET
    ? [
      s3Storage({
        collections: {
          media: true,
        },
        bucket: process.env.S3_BUCKET,
        config: {
          credentials: {
            accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
          },
          region: process.env.S3_REGION || '',
          endpoint: process.env.S3_ENDPOINT || '',
        },
      }),
    ]
    : []),
  // formBuilderPlugin({
  //   fields: {
  //     payment: false,
  //   },
  //   formOverrides: {
  //     fields: ({ defaultFields }) => {
  //       return defaultFields.map((field) => {
  //         if ('name' in field && field.name === 'confirmationMessage') {
  //           return {
  //             ...field,
  //             editor: lexicalEditor({
  //               features: ({ rootFeatures }) => {
  //                 return [
  //                   ...rootFeatures,
  //                   FixedToolbarFeature(),
  //                   HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
  //                 ]
  //               },
  //             }),
  //           }
  //         }
  //         return field
  //       })
  //     },
  //   },
  // }),
  // searchPlugin({
  //   collections: ['posts'],
  //   beforeSync: beforeSyncWithSearch,
  //   searchOverrides: {
  //     fields: ({ defaultFields }) => {
  //       return [...defaultFields, ...searchFields]
  //     },
  //   },
  // }),
  payloadCloudPlugin(),
]
