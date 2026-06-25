import React from 'react'
//import type { TitleBlock as TitleBlockProps } from '@/payload-types'
import { Align } from "@/components/Align"


type TitleBlockProps = {
  name: string;
  level?: string;
  id?: string | null;
  zigZag?: boolean;
  align?: 'left' | 'center' | 'right' | 'full' | null;
  number?: string | null;
};

const ZigZagSvg = () => (
  <div className='flex-none'>
    <svg width="78" height="12" viewBox="0 0 78 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path stroke="currentColor" d="M2.2002 2.34961C11.4702 2.34961 11.4802 10.3496 20.7502 10.3496C30.0202 10.3496 30.0302 2.34961 39.3002 2.34961C48.5702 2.34961 48.5702 10.3496 57.8502 10.3496C67.1302 10.3496 67.1302 2.34961 76.4102 2.34961" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" />
    </svg>
  </div>
);

export const TitleBlock: React.FC<TitleBlockProps> = ({ name, level, zigZag, align, id, number }) => {
  const Tag = (['h3', 'h4'].includes(level || '') ? level : 'h2') as 'h2' | 'h3' | 'h4';

  return (
    <div className="flex items-center">
      <div className="flex-1">
        <Align orientation={align}>
          <Tag id={id || ''} className="font-bold font-basis flex items-center gap-4" data-summary-visible data-summary-name={name} data-summary-number={number}>
            {zigZag && <ZigZagSvg />}
            {number && <span className="md:hidden print:!inline">{number}.</span>}
            {name}
          </Tag>
        </Align>
      </div>
    </div>
  );
};
