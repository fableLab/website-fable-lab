import type { Block } from 'payload'

export const DividerBlock: Block = {
  slug: 'dividerBlock',
  imageURL: '/blocks/divider.png',
  interfaceName: 'DividerBlock',
  labels: {
    singular: "Divider",
    plural: "Dividers",
  },
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
      defaultValue: 'prune'
    },
  ],
};
