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
    }
  ],
}
