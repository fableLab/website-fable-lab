import type { Block } from 'payload'
import { ImageBlock } from '../../blocks/ImageBlock/config'
import { CardBlock } from '../../blocks/CardBlock/config'
import { ZigZagBlock } from '../../blocks/ZigZagBlock/config'
import { ParagraphBlock } from '../../blocks/ParagraphBlock/config'

export const GridBlock: Block = {
  slug: 'gridBlock',
  interfaceName: 'GridBlock',
  imageURL: '/blocks/grid.png',
  fields: [
    {
      type: 'blocks',
      blocks: [ImageBlock, CardBlock, ZigZagBlock, ParagraphBlock],
      name: 'blocks'
    }
  ],
}
