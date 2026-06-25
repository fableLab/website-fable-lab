import React from 'react'

type SubTitleBlockProps = {
  name: string;
  id?: string | null;
  number?: string | null;
};

export const SubTitleBlock: React.FC<SubTitleBlockProps> = ({ id, name, number }) => {

  return (
    <h3 className="text-3xl text-azure-800 font-extrabold font basis flex gap-2" id={id || ''} data-summary-visible={true} data-summary-name={name} data-summary-number={number}>
      {number && <span className="md:hidden print:!inline">{number}.</span>}
      {name}
    </h3>
  )
}
