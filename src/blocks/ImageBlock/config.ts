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
    }
  ],
}
