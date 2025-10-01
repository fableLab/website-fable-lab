import type { Block } from 'payload'

export const YoutubeVideoBlock: Block = {
  slug: 'youtubeVideoBlock',
  interfaceName: 'YoutubeVideoBlock',
  imageURL: '/blocks/youtube-video.png',
  labels: {
    singular: "YoutubeVideoBlock",
    plural: "YoutubeVideoBlock",
  },
  fields: [
    {
      name: 'url',
      type: 'text',
      required: true
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
    {
      name: 'size',
      type: 'select',
      label: 'size',
      options: [
        { label: 'extra-small', value: 'xs' },
        { label: 'small', value: 'sm' },
        { label: 'medium', value: 'md' },
        { label: 'large', value: 'lg' },
        { label: 'full', value: 'xl' },
      ],
      defaultValue: 'md'
    },
  ],
}
