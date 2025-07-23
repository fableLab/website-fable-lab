import React from 'react'

export const Title: React.FC<{ id?: any, name: string }> = (props) => {
  const {
    id, name
  } = props

  return (
    <h2 className="text-4xl text-azure-800 font-bold font-basis" id={id} data-summary-visible={true}>
      {name}
    </h2>
  )
}
