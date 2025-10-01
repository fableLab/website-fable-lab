import type { Block } from 'payload'
import { ButtonsBlock } from '../../blocks/ButtonsBlock/config'

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

export const ImageParagraphBlock: Block = {
  slug: 'imageParagraphBlock',
  interfaceName: 'ImageParagraphBlock',
  imageURL: '/blocks/image-paragraph.png',
  labels: {
    singular: "Paragraph with image",
    plural: "Paragraph with image",
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'orientation',
      type: 'radio',
      label: 'Image orientation',
      defaultValue: 'right',
      options: [
        { value: 'left', label: 'left' },
        { value: 'right', label: 'right' },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'borderColor',
      type: 'select',
      label: 'Border Color',
      options: [
        { label: 'Jaune', value: 'yellow' },
        { label: 'Violet', value: 'violet' },
        { label: 'Bleu', value: 'blue' },
        { label: 'Orange', value: 'orange' },
        { label: 'Prune', value: 'prune' },
        { label: 'Transparent', value: 'transparent' },
      ],
      defaultValue: 'prune'
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
      }),
    },
    {
      type: 'blocks',
      blocks: [ButtonsBlock],
      name: 'buttons'
    }
  ],
}
