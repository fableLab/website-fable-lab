import React from 'react'
import { cn } from '@/utilities/ui'

import type { Member, Media } from '@/payload-types'

function isMedia(photo: number | Media): photo is Media {
  return typeof photo === 'object' && photo !== null && 'url' in photo;
}

type MemberProps = {
  member: Member,
  color: string,
  expanded: boolean,
  onClick?: () => void
}

export const MemberCard: React.FC<MemberProps> = ({
  member: {
    firstName,
    lastName,
    photo,
    role,
    since,
    skills = [],
    email
  },
  color,
  expanded,
  onClick
}) => {
  //const colors = Object.values(bgSecondaryColorsMap);
  //const [bgColor, setColor] = useState<string>(sample(colors))

  const handleToggleExpand = (memberId: string | number) => {
    //setExpanded(prev => !prev)
  }

  const skillsText = skills?.map(s => s.skill).join(', ')

  const containerClasses = expanded
    ? 'rounded-3xl border-[6px] border-camelot-800 bg-lavender-200 p-8 shadow-[7px_6px_10.5px_0px_#802D45B3]'
    : ''

  const nameClasses = expanded ? 'text-2xl' : 'text-xl'

  return (
    <div
      className={`
        flex flex-col items-center text-center
        cursor-pointer transition-all duration-300 ease-in-out
        ${containerClasses}
      `}
      onClick={onClick}
    >
      {isMedia(photo) && (
        <div className={cn('flex h-48 w-48 items-center justify-center rounded-full', color)}>
          <img src={photo.url || ""} alt={firstName} className="object-cover w-full h-full" />
        </div>
      )}

      <h3 className={`mt-4 text-camelot-800 font-bold gap-x-2 leading-tight transition-all duration-300 ${nameClasses}`}>
        <span>{firstName}</span> <span className="uppercase">{lastName}</span>
      </h3>
      {
        expanded && (
          <div className="mt-6 w-full animate-fade-in text-left">
            <ul className="list-disc list-inside space-y-1 text-lg text-black">
              {since && <li>depuis {new Date(since).getFullYear()}</li>}
              {role && <li>{role}</li>}
              {skillsText && <li>{skillsText}</li>}
              {email && (
                <li>
                  <a href={`${email}`} className="underline hover:text-[#5C1B33]">
                    {email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        )
      }
    </div >
  )
}
