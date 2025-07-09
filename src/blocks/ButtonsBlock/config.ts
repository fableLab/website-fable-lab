import type { Block } from 'payload'
import { ButtonDownloadBlock } from '../../blocks/ButtonDownloadBlock/config'
import { ButtonLinkBlock } from '../../blocks/ButtonLinkBlock/config'

export const ButtonsBlock: Block = {
  slug: 'buttonsBlock',
  interfaceName: 'ButtonsBlock',
  imageURL: '/blocks/buttons.png',
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
      type: 'blocks',
      blocks: [ButtonDownloadBlock, ButtonLinkBlock],
      name: 'blocks'
    }
  ],
}
