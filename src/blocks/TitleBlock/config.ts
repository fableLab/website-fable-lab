import type { Block } from 'payload'

export const TitleBlock: Block = {
  slug: 'titleBlock',
  interfaceName: 'TitleBlock',
  imageURL: '/blocks/title.png',
  labels: {
    singular: "Title",
    plural: "Title",
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true
    },
    {
      name: 'level',
      type: 'select',
      label: 'level',
      options: [
        { label: 'Title 1 (large)', value: 'h2' },
        { label: 'Title 2 (medium)', value: 'h3' },
        { label: 'Title 3 (small)', value: 'h4' },
      ],
      defaultValue: 'h2'
    },
    {
      name: 'zigZag',
      type: 'checkbox',
      label: 'zigZag'
    },
  ],
}
