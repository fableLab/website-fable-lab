import React, { Fragment } from 'react'
import { cn } from '@/utilities/ui'

import { ImageBlock } from '@/blocks/ImageBlock/Component'
import { TitleBlock } from '@/blocks/TitleBlock/Component'
import { SubTitleBlock } from '@/blocks/SubTitleBlock/Component'
import { ButtonDownloadBlock } from '@/blocks/ButtonDownloadBlock/Component'
import { ZigZagBlock } from './ZigZagBlock/Component'
import { CardBlock } from './CardBlock/Component'


const blockComponents = {
  imageBlock: ImageBlock,
  titleBlock: TitleBlock,
  subTitleBlock: SubTitleBlock,
  buttonDownloadBlock: ButtonDownloadBlock,
  zigZagBlock: ZigZagBlock,
  cardBlock: CardBlock
}

export const RenderGridBlocks: React.FC<{
  blocks: any[]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const blockType = (block as { blockType: keyof typeof blockComponents }).blockType;


          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
