import type { Block } from 'payload'

export const ButtonDownloadBlock: Block = {
  slug: 'buttonDownloadBlock',
  interfaceName: 'ButtonDownloadBlock',
  imageURL: '/blocks/button-download.png',
  label: 'Link download',
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    }
  ],
}
