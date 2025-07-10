import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const TicketPaperBlock: Block = {
  slug: 'ticketPaperBlock',
  interfaceName: 'TicketPaperBlock',
  fields: [
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
            defaultValue: 'yellow',
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
  ]

}
