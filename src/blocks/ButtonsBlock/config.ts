import type { Block } from 'payload'
import { ButtonDownloadBlock } from '../../blocks/ButtonDownloadBlock/config'
import { ButtonLinkBlock } from '../../blocks/ButtonLinkBlock/config'
import { ButtonDownloadCloudBlock } from '../../blocks/ButtonDownloadCloudBlock/config'

export const ButtonsBlock: Block = {
  slug: 'buttonsBlock',
  interfaceName: 'ButtonsBlock',
  imageURL: '/blocks/buttons.png',
  labels: {
    singular: "Buttons",
    plural: "Buttons",
  },
  fields: [
    {
      name: 'direction',
      type: 'radio',
      label: 'Orientation',
      defaultValue: 'horizontal',
      options: [
        { value: 'horizontal', label: 'horizontal' },
        { value: 'vertical', label: 'vertical' },
      ],
    },
    {
      name: 'align',
      type: 'select',
      label: 'Align',
      options: [
        { label: 'left', value: 'left' },
        { label: 'center', value: 'center' },
        { label: 'right', value: 'right' },
        { label: 'full', value: 'full' }
      ],
      defaultValue: 'full'
    },
    {
      type: 'blocks',
      label: 'buttons',
      blocks: [ButtonDownloadCloudBlock, ButtonDownloadBlock, ButtonLinkBlock],
      name: 'blocks'
    }
  ],
}
