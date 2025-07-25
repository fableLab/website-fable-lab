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
  imageURL: '/blocks/ticket-paper.png',
  fields: [
    {
            name: 'color',
            type: 'select',
            label: 'Color',
            options: [
                { label: 'Jaune', value: 'yellow' },
                { label: 'Violet', value: 'violet' },
                { label: 'Bleu', value: 'blue' },
                { label: 'Orange', value: 'orange' },
                { label: 'Prune', value: 'prune' },
            ],
            defaultValue: 'blue',
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
