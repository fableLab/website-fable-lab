import type { GlobalConfig } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  BlocksFeature,
  lexicalEditor,
  ParagraphFeature,
  UnorderedListFeature,
  OrderedListFeature,
  AlignFeature,
  BlockquoteFeature,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  StrikethroughFeature,
  InlineCodeFeature,
  IndentFeature,
} from '@payloadcms/richtext-lexical'

export const TextsPage: GlobalConfig = {
  slug: 'textsPage',
  labels: {
    singular: 'Texte',
    plural: 'Textes',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'projects',
      label: 'Projects description',
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
    },
    {
      name: 'resources',
      label: 'Resources description',
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
    }
  ]
}
