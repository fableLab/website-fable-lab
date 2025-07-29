import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import MembersView from './MembersView'
import { type Member } from '@/payload-types'
import { shuffleArray } from '../../../utilities/shuffle'
import sample from '@/utilities/sample'
import { bgSecondaryColorsMap } from '@/constants/ColorMaps'
const colors = Object.values(bgSecondaryColorsMap);

export default async function MembersPage() {
  const payload = await getPayload({ config })

  const positions = [
    'col-start-1',
    'md:col-start-2',
    'md:col-start-3',
    'md:col-start-4',
  ]

  // Fetch ALL members
  const { docs: members } = (await payload.find({
    collection: 'members',
    limit: 0,
  })) as { docs: Member[] }

  // Render the client component and pass the fetched members as a prop
  const shuffledMembers = shuffleArray(members).map(member => ({
    ...member,
    expanded: false,
    position: sample(positions),
    color: sample(colors)
  }))

  return <MembersView members={shuffledMembers} />
}
