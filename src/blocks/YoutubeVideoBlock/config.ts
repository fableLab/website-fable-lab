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
  ],
}
