'use client'
import React from 'react' // Remove useState

type MemberCardProps = {
  firstName: string
  lastName: string
  photo?: string
  role?: string | null
  since?: string | null
  skills?: { skill: string }[] | null
  email?: string | null
  // Add these new props:
  isExpanded: boolean
  onToggleExpand: () => void
  bgColor: string
}

export const MemberCard: React.FC<MemberCardProps> = ({
  firstName,
  lastName,
  photo,
  role,
  since,
  skills = [],
  email,
  isExpanded,
  onToggleExpand,
  bgColor,
}) => {
  const skillsText = skills?.map(s => s.skill).join(', ')

  console.log("photo: ", photo)
  const containerClasses = isExpanded
    ? 'rounded-3xl border-[6px] border-camelot-800 bg-lavender-200 p-8 shadow-[7px_6px_10.5px_0px_#802D45B3]'
    : ''

  const nameClasses = isExpanded ? 'text-2xl' : 'text-xl'

  return (
    <div
      className={`
        flex flex-col items-center text-center
        cursor-pointer transition-all duration-500 ease-in-out
        ${containerClasses}
      `}
      onClick={onToggleExpand}
    >
      {photo && (
        <div className={`flex h-48 w-48 items-center justify-center rounded-full ${bgColor}`}>
          <img src={photo} alt={firstName} className="object-cover w-full h-full" />
        </div>
      )}

      <h3 className={`mt-4 text-camelot-800 font-bold gap-x-2 leading-tight transition-all duration-300 ${nameClasses}`}>
        <span>{firstName}</span> <span className="uppercase">{lastName}</span>
      </h3>
      {isExpanded && (
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
      )}
    </div>
  )
}
