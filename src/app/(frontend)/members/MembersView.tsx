"use client"

import React, { useState, useEffect } from 'react'
import { MemberCard } from '@/components/Member'
import Banner from '@/components/Banner/Banner'
import { shuffleArray } from '../../../utilities/shuffle'
import { Divider } from '@/components/Divider'
import type { Member } from '@/payload-types'
import { bgSecondaryColorsMap } from '@/constants/ColorMaps'

type MemberWithColor = Member & {
  bgColor: string;
}

type ShuffledData = {
  shuffledMembers: MemberWithColor[]
  positions: string[]
}

export default function MembersView({ members }: { members: Member[] }) {

  const [expandedMemberId, setExpandedMemberId] = useState<string | number | null>(null)
  const [shuffledData, setShuffledData] = useState<ShuffledData | null>(null)

  useEffect(() => {

     if (!members || members.length === 0) {
      return
    }


    const colorValues = Object.values(bgSecondaryColorsMap);

    const membersWithColors = members.map(member => ({
      ...member,
      bgColor: colorValues[Math.floor(Math.random() * colorValues.length)],
    }))

    const shuffledMembers = shuffleArray(membersWithColors)

    const positions = shuffleArray([
      'col-start-1',
      'sm:col-start-2',
      'md:col-start-3',
      'lg:col-start-4',
    ])
    setShuffledData({ shuffledMembers, positions })
  }, [members])

  const handleToggleExpand = (memberId: string | number) => {
    setExpandedMemberId(currentId => (currentId === memberId ? null : memberId))
  }

  if (!shuffledData) {
    return null
  }

  return (
    <div className="grid grid-cols-12 flex-grow">
      {/* Sidebar */}
      <aside className="hidden md:block md:col-span-3 bg-lavender-100 px-6">
        <div className="ms-8 me-16 mt-16 mb-12 top-6 sticky">
          <h2 className="text-camelot-800 font-bold mb-6 underline">Annuaire de l’équipe</h2>
          <ul className="ml-4 space-y-5 text-camelot-800 text-sm">
            {members.map(member => (
              <li key={member.id}>
                <a
                  href={`#${member.slug}`}
                  className="font-bold hover:underline block cursor-pointer"
                  onClick={() => handleToggleExpand(member.id)}
                >
                  {member.firstName} {member.lastName}
                </a>
                {member.role && <p className="text-camelot-800">{member.role}</p>}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <main className="col-span-12 md:col-span-9 mb-14">
        <Banner title="Notre équipe" className="bg-lavender-400 mb-14" />
        <Divider color="yellow" />
        <div className="flex flex-col px-4 py-16 gap-12 w-full overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-14 w-full">
            {shuffledData.shuffledMembers.map((member, index) => {
              const isExpanded = expandedMemberId === member.id

              const positionClass = shuffledData.positions[index % shuffledData.positions.length]
              // const sizingClasses = isExpanded
              //   ? 'col-span-full md:col-span-2 lg:col-span-3 z-10'
              //   : 'col-span-1'



              return (
                <div key={member.id} id={member.slug} className={`cflex justify-center transition-all duration-500 ${positionClass}`}>
                  <MemberCard
                    firstName={member.firstName}
                    lastName={member.lastName}
                    photo={member.photo?.url}
                    role={member.role ?? undefined}
                    since={member.since ?? undefined}
                    skills={member.skills ?? undefined}
                    email={member.email ?? undefined}
                    isExpanded={isExpanded}
                    onToggleExpand={() => handleToggleExpand(member.id)}
                    bgColor={member.bgColor}
                  />
                </div>
              )
            })}
          </div>
        </div>
        <Divider color="yellow" />
      </main>
    </div>
  )
}
