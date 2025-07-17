import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'


export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'links',
      label: 'Links',
      type: 'array',
      fields: [
        {
          name: 'type',
          type: 'select',
          options: [
            { label: 'Single Link', value: 'singleLink' },
            { label: 'List of Links', value: 'listLink' },
          ],
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'singleLink',
          label: 'Single Link',
          type: 'group',
          fields: [
            link({ appearances: false })
          ],
          admin: {
            condition: (_, siblingData) => siblingData.type === 'singleLink',
            width: '50%',
          },
        },
        {
          name: 'label',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData.type === 'listLink',
          }
        },
        {
          name: 'listLink',
          label: 'List of Links',
          type: 'array',
          fields: [
            link({ appearances: false })
          ],
          maxRows: 10,
          admin: {
            condition: (_, siblingData) => siblingData.type === 'listLink',
          },
        },
      ],
      maxRows: 20,
      admin: {
        initCollapsed: true,
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
