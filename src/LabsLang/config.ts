import type { GlobalConfig } from 'payload'
import { generatePreviewPath } from '../utilities/generatePreviewPath'

import { ParagraphBlock } from '@/blocks/ParagraphBlock/config'
import { ImageBlock } from '@/blocks/ImageBlock/config'
import { ImageParagraphBlock } from '@/blocks/ImageParagraphBlock/config'
import { TitleBlock } from '@/blocks/TitleBlock/config'
import { SubTitleBlock } from '@/blocks/SubTitleBlock/config'
import { ButtonsBlock } from '@/blocks/ButtonsBlock/config'
import { LicenseBlock } from '@/blocks/LicenseBlock/config'
import { ZigZagBlock } from '@/blocks/ZigZagBlock/config'
import { SpacerBlock } from '@/blocks/SpacerBlock/config'
import { TicketPaperBlock } from '@/blocks/TicketPaperBlock/config'
import { YoutubeVideoBlock } from '@/blocks/YoutubeVideoBlock/config'
import { FrameCardBlock } from '@/blocks/FrameCardBlock/config'
import { DividerBlock } from '@/blocks/DividerBlock/config'

import { GridBlock } from '@/blocks/GridBlock/config'

export const LabsLangPage: GlobalConfig = {
  slug: 'LabsLangPage',
  dbName: 'll_page',
  label: {
    plural: "Page d'acceuil Labs&Lang 🇪🇺🇧🇪🇫🇷",
  },
  access: {
    read: () => true,
  },
  admin: {
    livePreview: {
      url: ({ req }) =>
        generatePreviewPath({
          global: 'LabsLangPage',
          req,
        }),
    },
    preview: (_, { req }) =>
      generatePreviewPath({
        global: 'LabsLangPage',
        req,
      }),
  },
  versions: {
    drafts: {
      autosave: { interval: 100 },
      validate: false,
    },
  },
  fields: [
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [ParagraphBlock, ImageBlock, TitleBlock, SubTitleBlock, ButtonsBlock, LicenseBlock, ImageParagraphBlock, FrameCardBlock, TicketPaperBlock, DividerBlock, ZigZagBlock, SpacerBlock, YoutubeVideoBlock, GridBlock],
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ]
}
