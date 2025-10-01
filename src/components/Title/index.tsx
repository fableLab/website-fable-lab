import React from 'react'

export const Title: React.FC<{ name: string }> = (props) => {
  const {
    name
  } = props

  return (
    <h2 className="text-4xl text-azure-800 font-bold font-basis" data-summary-visible={true}>
      {name}
    </h2>
  )
}
