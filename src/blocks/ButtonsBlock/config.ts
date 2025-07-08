import type { Block } from 'payload'
import { ButtonDownloadBlock } from '../../blocks/ButtonDownloadBlock/config'

export const ButtonsBlock: Block = {
  slug: 'buttonsBlock',
  interfaceName: 'ButtonsBlock',
  imageURL: '/blocks/buttons.png',
  fields: [
    {
      name: 'direction',
      type: 'select',
      label: 'Orientation',
      defaultValue: 'horizontal',
       options: [
         { value: 'horizontal', label: 'horizontal' },
         { value: 'vertical', label: 'vertical' },
     ],
    },
    {
      type: 'blocks',
      blocks: [ButtonDownloadBlock],
      name: 'blocks'
    }
  ],
}
