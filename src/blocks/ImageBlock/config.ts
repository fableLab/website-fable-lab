import type { Block } from 'payload'

export const ImageBlock: Block = {
  slug: 'imageBlock',
  interfaceName: 'ImageBlock',
  imageURL: '/blocks/image.png',
  labels: {
    singular: "Image",
    plural: "Image",
  },
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'align',
      type: 'select',
      label: 'Align',
      options: [
        { label: 'gauche', value: 'left' },
        { label: 'center', value: 'center' },
        { label: 'right', value: 'right' },
      ],
      defaultValue: 'center'
    },
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
    },
    {
      name: 'borderColor',
      type: 'select',
      label: 'Border Color',
      options: [
        { label: 'Jaune', value: 'yellow' },
        { label: 'Violet', value: 'violet' },
        { label: 'Bleu', value: 'blue' },
        { label: 'Orange', value: 'orange' },
        { label: 'Prune', value: 'prune' },
        { label: 'Transparent', value: 'transparent' },
      ],
      defaultValue: 'prune'
    },
  ],
}
