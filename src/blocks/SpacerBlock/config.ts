import type { Block } from 'payload'

export const SpacerBlock: Block = {
  slug: 'spacerBlock',
  imageURL: '/blocks/spacer.png',
  interfaceName: 'SpacerBlock',
  labels: {
    singular: "Spacer",
    plural: "Spacers",
  },
  fields: [
    {
      name: 'size',
      type: 'select',
      label: 'size',
      options: [
        { label: 'extra-small', value: 'xs' },
        { label: 'small', value: 'sm' },
        { label: 'medium', value: 'md' },
        { label: 'large', value: 'lg' },
        { label: 'extra-large', value: 'xl' }
      ],
      defaultValue: 'md'
    }
  ],
};
