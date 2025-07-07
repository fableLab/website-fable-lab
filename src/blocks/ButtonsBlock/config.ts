import type { Block } from 'payload'
import { ButtonDownloadBlock } from '../../blocks/ButtonDownloadBlock/config'

export const ButtonsBlock: Block = {
  slug: 'buttonsBlock',
  interfaceName: 'ButtonsBlock',
  imageURL: '/blocks/buttons.png',
  fields: [
    {
      type: 'blocks',
      blocks: [ButtonDownloadBlock],
      name: 'blocks'
    }
  ],
}
