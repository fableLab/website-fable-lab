import type { Block } from 'payload'
import { ButtonsBlock } from '../../blocks/ButtonsBlock/config'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'

export const ListItemBlock: Block = {
  slug: 'listItemBlock',
  interfaceName: 'ListItemBlock',
  imageURL: '/blocks/list-item.png',
  fields: [
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false
    },
    {
      type: 'blocks',
      blocks: [ButtonsBlock],
      name: 'buttons'
    }
  ],
}
