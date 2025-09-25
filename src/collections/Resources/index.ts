import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { ParagraphBlock } from '../../blocks/ParagraphBlock/config'
import { ImageBlock } from '../../blocks/ImageBlock/config'
import { ImageParagraphBlock } from '../../blocks/ImageParagraphBlock/config'
import { TitleBlock } from '../../blocks/TitleBlock/config'
import { SubTitleBlock } from '../../blocks/SubTitleBlock/config'
import { ButtonsBlock } from '../../blocks/ButtonsBlock/config'
import { LicenseBlock } from '../../blocks/LicenseBlock/config'
import { ZigZagBlock } from '../../blocks/ZigZagBlock/config'
import { SpacerBlock } from '../../blocks/SpacerBlock/config'
import { TicketPaperBlock } from '@/blocks/TicketPaperBlock/config'
import { YoutubeVideoBlock } from '@/blocks/YoutubeVideoBlock/config'
import { slugField } from '@/fields/slug'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidateResource } from './hooks/revalidateResource'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { FrameCardBlock } from '@/blocks/FrameCardBlock/config'
import { DividerBlock } from '@/blocks/DividerBlock/config'

export const Resources: CollectionConfig<'resources'> = {
  slug: 'resources',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a resource is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'resources'>
  defaultPopulate: {
    name: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['name', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'resources',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'resources',
        req,
      }),
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'creators',
      label: 'creators',
      type: 'select',
      hasMany: true,
      options: [
        { value: 'fable-Lab', label: 'fable-Lab' },
        { value: 'external', label: 'external' }
      ],
      required: true,
      defaultValue: 'fable-Lab'
    },
    {
      name: 'needs',
      type: 'select',
      hasMany: true,
      admin: {
        isClearable: true,
      },
      options: [
        { label: 'Accompagner', value: 'Accompagner' },
        { label: 'Animer un atelier', value: 'Animer un atelier' },
        { label: 'Animer une formation', value: 'Animer une formation' },
        { label: 'Apprendre une langue', value: 'Apprendre une langue' },
        { label: 'Communiquer', value: 'Communiquer' },
        { label: 'Écrire', value: 'Écrire' },
        { label: 'Fabriquer', value: 'Fabriquer' },
        { label: 'Se former', value: 'Se former' },
        { label: 'S’informer', value: 'S’informer' },
        { label: 'Sensibiliser', value: 'Sensibiliser' },
        { label: 'Traduire', value: 'Traduire' },
      ],
    },
    {
      name: 'linguistics',
      type: 'select',
      hasMany: true,
      admin: {
        isClearable: true,
      },
      options: [
        { label: 'Analphabétisme', value: 'Analphabétisme' },
        { label: 'Illettrisme', value: 'Illettrisme' },
        { label: 'Langage clair', value: 'Langage clair' },
        { label: 'Multilingue', value: 'Multilingue' },
      ],
    },
    {
      name: 'languages',
      type: 'relationship',
      relationTo: 'languages',
      hasMany: true
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'blocks',
              type: 'blocks',
              blocks: [ParagraphBlock, ImageBlock, TitleBlock, SubTitleBlock, ButtonsBlock, LicenseBlock, ImageParagraphBlock, FrameCardBlock, TicketPaperBlock, DividerBlock, ZigZagBlock, SpacerBlock, YoutubeVideoBlock],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.name',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.name',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField('name'),
  ],
  hooks: {
    afterChange: [revalidateResource],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 50,
  },
}
