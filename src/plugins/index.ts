// import { payloadCloudPlugin } from '@payloadcms/payload-cloud' // Disabled - not using Payload Cloud
import { s3Storage } from '@payloadcms/storage-s3'

import { Plugin } from 'payload'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { seoPlugin } from '@payloadcms/plugin-seo'
// import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { searchFields } from '@/search/fieldOverrides'
import { searchPlugin } from '@payloadcms/plugin-search'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
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
  s3Storage({
    collections: {
      media: {
        disableLocalStorage: Boolean(process.env.S3_BUCKET),
      },
    },
    enabled: Boolean(process.env.S3_BUCKET),
    bucket: process.env.S3_BUCKET || '',
    config: {
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
      },
      region: process.env.S3_REGION || '',
      endpoint: process.env.S3_ENDPOINT || '',
      forcePathStyle: true,
    },
  }),
  formBuilderPlugin({
    fields: {
      payment: false,
      state: false,
    },
  }),
  searchPlugin({
    collections: ['projects', 'resources', 'pages'],
    beforeSync: ({ originalDoc, searchDoc }) => {
      const collection = searchDoc.doc.relationTo;

      // If the document is from the blog-articles collection...
      if (collection === 'projects') {
        return {
          ...searchDoc,
          slug: originalDoc.slug,
          title: originalDoc.name,
          description: originalDoc.description,
          url: `/projets/${originalDoc.slug}`
        };
      }
      if (collection === 'resources') {
        return {
          ...searchDoc,
          slug: originalDoc.slug,
          title: originalDoc.name,
          description: originalDoc.description,
          url: `/ressources/${originalDoc.slug}`
        };
      }

      if (collection === 'pages') {
        return {
          ...searchDoc,
          slug: originalDoc.slug,
          title: originalDoc.title,
          description: originalDoc.description,
          url: `/${originalDoc.slug}`
        };
      }

      // For any other collections not explicitly handled, fall back to the default
      return searchDoc;
    },
    searchOverrides: {
      fields: ({ defaultFields }) => {
        return [...defaultFields, ...searchFields]
      },
    },
  }),
  // payloadCloudPlugin(), // Disabled - not using Payload Cloud
]
