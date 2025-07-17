import type { Block } from 'payload'

export const SubTitleBlock: Block = {
  slug: 'subTitleBlock',
  interfaceName: 'SubTitleBlock',
  imageURL: '/blocks/sub-title.png',
  labels: {
    singular: "Sub title",
    plural: "Sub title",
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true
    }
  ],
}
