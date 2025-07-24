import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import MembersView from './MembersView' 
import { type Member } from '@/payload-types'

export default async function MembersPage() {
  const payload = await getPayload({ config })

  // Fetch ALL members
  const { docs: members } = (await payload.find({
    collection: 'members',
    limit: 0,
  })) as { docs: Member[] }

  // Render the client component and pass the fetched members as a prop
  return <MembersView members={members} />
}
