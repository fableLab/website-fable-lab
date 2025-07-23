import React from 'react'

export const SubTitle: React.FC<{ id?: any, name: string }> = ({ id, name }) => {
  return (
    <h3 className="text-3xl text-azure-800 font-extrabold font basis" id={id} data-summary-visible={true}>
      {name}
    </h3>
  )
}
