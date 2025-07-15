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

export const ProjectsPage: GlobalConfig = {
  slug: 'projectsPage',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'description',
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
    }
  ]
}
