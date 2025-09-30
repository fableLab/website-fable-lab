import type { Block } from 'payload'
import { ImageBlock } from '../../blocks/ImageBlock/config'
import { CardBlock } from '../../blocks/CardBlock/config'

export const GridBlock: Block = {
  slug: 'gridBlock',
  interfaceName: 'GridBlock',
  imageURL: '/blocks/grid.png',
  fields: [
    {
      type: 'blocks',
      blocks: [ImageBlock, CardBlock],
      name: 'blocks'
    }
  ],
}
