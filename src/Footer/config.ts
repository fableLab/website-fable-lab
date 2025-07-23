import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Left column',
          fields: [
            {
              name: 'leftColumn',
              type: 'array',
              fields: [
                link({ appearances: false }),
              ],
            },
          ],
        },
        {
          label: 'Center column',
          fields: [
            {
              name: 'centerColumn',
              type: 'array',
              fields: [
                link({ appearances: false }),
              ],
            },
          ],
        },
        {
          label: 'Right column',
          fields: [
            {
              name: 'rightColumn',
              type: 'array',
              fields: [
                link({ appearances: false }),
              ],
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
