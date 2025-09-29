import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { anyone } from '../../access/anyone'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'

export const Categories: CollectionConfig = {
  slug: 'categories',
  defaultPopulate: { name: true, code: true },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name'],
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true
    },
  ],
  timestamps: true,
}
