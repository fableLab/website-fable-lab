import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const CardBlock: Block = {
  slug: 'cardBlock',
  imageURL: '/blocks/card.png',
  interfaceName: 'CardBlock',
  labels: {
    singular: "Card",
    plural: "Card",
  },
  fields: [
    {
      name: 'color',
      type: 'select',
      label: 'Background color',
      options: [
        { label: 'Jaune', value: 'yellow' },
        { label: 'Violet', value: 'violet' },
        { label: 'Bleu', value: 'blue' },
        { label: 'Orange', value: 'orange' },
        { label: 'Prune', value: 'prune' },
      ],
      defaultValue: 'violet',
      required: true
    },
    {
      name: 'textColor',
      type: 'select',
      label: 'Text color',
      options: [
        { label: 'Black', value: 'black' },
        { label: 'White', value: 'white' },
        { label: 'Jaune', value: 'yellow' },
        { label: 'Violet', value: 'violet' },
        { label: 'Bleu', value: 'blue' },
        { label: 'Orange', value: 'orange' },
        { label: 'Prune', value: 'prune' }
      ],
      defaultValue: 'black'
    },
    {
      name: 'borderColor',
      type: 'select',
      label: 'Border color',
      options: [
        { label: 'Jaune', value: 'yellow' },
        { label: 'Violet', value: 'violet' },
        { label: 'Bleu', value: 'blue' },
        { label: 'Orange', value: 'orange' },
        { label: 'Prune', value: 'prune' },
      ],
    },
    {
      name: 'link',
      type: 'text',
    },
    {
      name: 'body',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
      required: true,
    }
  ],
};
