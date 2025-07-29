'use client'
import React, { useState } from 'react'
import { MemberCard } from '@/components/Member'
import Banner from '@/components/Banner/Banner'
import { Divider } from '@/components/Divider'

import type { Member } from '@/payload-types'

export type MemberWithExpanded = Member & {
  expanded: boolean,
  position: string,
  color: string
}

import { cn } from '@/utilities/ui'

export default function MembersView({ members: initialMembers }: { members: MemberWithExpanded[] }) {
  const [members, setMembers] = useState(initialMembers)

  const handleToggleExpand = (memberId: number) => {
    setMembers(prevMembers =>
      prevMembers.map(member => ({
        ...member,
        expanded: member.id === memberId ? !member.expanded : false
      }))
    );
  };

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
        <Banner title="Notre équipe" color="violet" />
        <Divider color="yellow" className="mt-8" />
        <div className="flex flex-col px-4 py-16 gap-12 w-full overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-14 w-full">
            {members.map((member) => {
              return (
                <div key={member.id} className={cn('cflex justify-center transition-all', member.position)}>
                  <MemberCard
                    member={member}
                    expanded={member.expanded}
                    color={member.color}
                    onClick={() => handleToggleExpand(member.id)}
                  />
                </div>
              )
            })}
          </div>
        </div>
        <Divider color="yellow" />
      </main >
    </div >
  )
}
