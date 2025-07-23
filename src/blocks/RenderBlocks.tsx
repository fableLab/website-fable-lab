import React, { Fragment } from 'react'
import { cn } from '@/utilities/ui'

import { ParagraphBlock } from '@/blocks/ParagraphBlock/Component'
import { ImageParagraphBlock } from '@/blocks/ImageParagraphBlock/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { ImageBlock } from '@/blocks/ImageBlock/Component'
import { TitleBlock } from '@/blocks/TitleBlock/Component'
import { SubTitleBlock } from '@/blocks/SubTitleBlock/Component'
import { ButtonDownloadBlock } from '@/blocks/ButtonDownloadBlock/Component'
import { ButtonsBlock } from '@/blocks/ButtonsBlock/Component'
import { LicenseBlock } from '@/blocks/LicenseBlock/Component'
import { LicenseItemBlock } from '@/blocks/LicenseItemBlock/Component'
// import { ListBlock } from '@/blocks/ListBlock/Component'
// import { ListItemBlock } from '@/blocks/ListItemBlock/Component'
import { ButtonLinkBlock } from './ButtonLinkBlock/Component'
import { FrameCardBlock } from './FrameCardBlock/Component'
import { TicketPaperBlock } from './TicketPaperBlock/Component'
import { DividerBlock } from './DividerBlock/Component'

const blockComponents = {
  paragraphBlock: ParagraphBlock,
  formBlock: FormBlock,
  imageBlock: ImageBlock,
  titleBlock: TitleBlock,
  subTitleBlock: SubTitleBlock,
  buttonDownloadBlock: ButtonDownloadBlock,
  buttonsBlock: ButtonsBlock,
  licenseBlock: LicenseBlock,
  licenseItemBlock: LicenseItemBlock,
  // listBlock: ListBlock,
  // listItemBlock: ListItemBlock,
  buttonLinkBlock: ButtonLinkBlock,
  imageParagraphBlock: ImageParagraphBlock,
  frameCardBlock: FrameCardBlock,
  ticketPaperBlock: TicketPaperBlock,
  dividerBlock: DividerBlock
}

const marginByBlockType: Record<string, string> = {
  titleBlock: "mb-4",
  subTitleBlock: "mb-4",
  licenseItemBlock: "mb-4",
  buttonLinkBlock: "",
  buttonDownloadBlock: "",
};

export const RenderBlocks: React.FC<{
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
                <div key={index} className={cn(marginByBlockType[blockType] ?? "mb-14")}>
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
