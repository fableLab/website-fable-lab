import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
  ParagraphFeature,
  UnorderedListFeature,
  OrderedListFeature,
  AlignFeature,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  StrikethroughFeature,
  InlineCodeFeature,
  IndentFeature,
} from '@payloadcms/richtext-lexical'

export const ParagraphBlock: Block = {
  slug: 'paragraphBlock',
  interfaceName: 'ParagraphBlock',
  imageURL: '/blocks/paragraph.png',
  labels: {
    singular: "Paragraph",
    plural: "Paragraph",
  },
  fields: [
    {
      name: 'orientation',
      type: 'radio',
      defaultValue: 'full',
      options: [
        {
          label: 'Full',
          value: 'full',
        },
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Center',
          value: 'center',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
      required: true,
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
          ParagraphFeature(),////
          UnorderedListFeature(),
          OrderedListFeature(),
          AlignFeature(),
          BoldFeature(),
          ItalicFeature(),
          UnderlineFeature(),
          StrikethroughFeature(),
          InlineCodeFeature(),
          IndentFeature(),
        ],
      }
      ),
      required: true,
    },
  ],
}
