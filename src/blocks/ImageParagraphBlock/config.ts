import type { Block } from 'payload'
import { ButtonsBlock } from '../../blocks/ButtonsBlock/config'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
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
      required: true
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
      name: 'body',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          FixedToolbarFeature(),
          InlineToolbarFeature(),
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
