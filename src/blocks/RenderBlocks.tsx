import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { ImageBlock } from '@/blocks/ImageBlock/Component'
import { TitleBlock } from '@/blocks/TitleBlock/Component'
import { SubTitleBlock } from '@/blocks/SubTitleBlock/Component'
import { ButtonDownloadBlock } from '@/blocks/ButtonDownloadBlock/Component'
import { ButtonsBlock } from '@/blocks/ButtonsBlock/Component'
import { LicenseBlock } from '@/blocks/LicenseBlock/Component'
import { LicenseItemBlock } from '@/blocks/LicenseItemBlock/Component'
import { ListBlock } from '@/blocks/ListBlock/Component'
import { ListItemBlock } from '@/blocks/ListItemBlock/Component'


const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  imageBlock: ImageBlock,
  titleBlock: TitleBlock,
  subTitleBlock: SubTitleBlock,
  buttonDownloadBlock: ButtonDownloadBlock,
  buttonsBlock: ButtonsBlock,
  licenseBlock: LicenseBlock,
  licenseItemBlock: LicenseItemBlock,
  listBlock: ListBlock,
  listItemBlock: ListItemBlock
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
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
