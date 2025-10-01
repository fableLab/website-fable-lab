import { cn } from '@/utilities/ui'
import React, { ReactNode } from 'react'

export const Align: React.FC<{
  orientation?: 'left' | 'center' | 'right' | 'full' | null
  children: ReactNode
}> = ({ orientation, children }) => {
  const align = orientation ?? 'full'

  return (
    <div
      className={cn(
        'flex',
        align === 'left' && 'justify-start',
        align === 'center' && 'justify-center',
        align === 'right' && 'justify-end'
      )}
    >
      <div
        className={
          align !== 'full'
            ? 'w-full md:w-8/12 xl:w-1/2'
            : 'w-full'
        }
      >
        {children}
      </div>
    </div >
  )
}
