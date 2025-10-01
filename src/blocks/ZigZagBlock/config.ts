import type { Block } from 'payload'

export const ZigZagBlock: Block = {
  slug: 'zigZagBlock',
  imageURL: '/blocks/zigzag.png',
  interfaceName: 'ZigZagBlock',
  labels: {
    singular: "ZigZag",
    plural: "ZigZags",
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
    {
      name: 'align',
      type: 'select',
      label: 'Align',
      options: [
        { label: 'left', value: 'left' },
        { label: 'center', value: 'center' },
        { label: 'right', value: 'right' },
        { label: 'full', value: 'full' },
      ],
    },
  ],
};
