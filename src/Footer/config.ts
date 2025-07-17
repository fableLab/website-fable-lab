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
              maxRows: 6,
              admin: {
                initCollapsed: true,
                components: {
                  RowLabel: '@/Footer/RowLabel#RowLabel',
                },
              },
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
              maxRows: 6,
              admin: {
                initCollapsed: true,
                components: {
                  RowLabel: '@/Footer/RowLabel#RowLabel',
                },
              },
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
              maxRows: 6,
              admin: {
                initCollapsed: true,
                components: {
                  RowLabel: '@/Footer/RowLabel#RowLabel',
                },
              },
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
