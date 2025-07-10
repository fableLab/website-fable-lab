import { Block } from 'playload/types';
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'


export const FrameCardBlock: Block = {
    slug: 'framecardBlock',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'color',
            type: 'select',
            label: 'Border Color',
            options: [
                { label: 'Jaune', value: 'yellow' },
                { label: 'Violet', value: 'violet' },
                { label: 'Bleu', value: 'blue' },
                { label: 'Orange', value: 'orange' },
                { label: 'Prune', value: 'prune' },
            ],
            defaultValue: 'prune',
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
    },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media'
        },
    ],
};
