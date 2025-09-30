import type { Block } from 'payload'

export const ButtonDownloadCloudBlock: Block = {
  slug: 'buttonDownloadCloudBlock',
  interfaceName: 'ButtonDownloadCloudBlock',
  imageURL: '/blocks/button-download.png',
  labels: {
    singular: "Download Cloud Button",
    plural: "Download Cloud Buttons",
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      required: true,
    }
  ],
}
