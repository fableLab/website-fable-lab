import React from 'react'
import type { TitleBlock as TitleBlockProps } from '@/payload-types'
import { strokePrimaryColorsMap, ColorsList } from "@/constants/ColorMaps"

export const TitleBlock: React.FC<TitleBlockProps> = ({ name, level, zigZag }) => {
  const renderTitle = () => {
    switch (level) {
      case "h3":
        return (
          <h3
            className="font-bold font-basis flex items-center gap-4"
            data-summary-visible={true}
          >
            {zigZag && <div className='flex-none'>
              <svg width="78" height="12" viewBox="0 0 78 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path stroke="currentColor" d="M2.2002 2.34961C11.4702 2.34961 11.4802 10.3496 20.7502 10.3496C30.0202 10.3496 30.0302 2.34961 39.3002 2.34961C48.5702 2.34961 48.5702 10.3496 57.8502 10.3496C67.1302 10.3496 67.1302 2.34961 76.4102 2.34961" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" />
              </svg>
            </div>}
            {name}
          </h3>
        );
      case "h4":
        return (
          <h4
            className="font-bold font-basis flex items-center gap-4"
            data-summary-visible={true}
          >
            {zigZag && <div className='flex-none'>
              <svg width="78" height="12" viewBox="0 0 78 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path stroke="currentColor" d="M2.2002 2.34961C11.4702 2.34961 11.4802 10.3496 20.7502 10.3496C30.0202 10.3496 30.0302 2.34961 39.3002 2.34961C48.5702 2.34961 48.5702 10.3496 57.8502 10.3496C67.1302 10.3496 67.1302 2.34961 76.4102 2.34961" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" />
              </svg>
            </div>}
            {name}
          </h4>
        );
      default:
        return (
          <h2
            className="font-bold font-basis flex items-center gap-4"
            data-summary-visible={true}
          >
            {zigZag && <div className='flex-none'>
              <svg width="78" height="12" viewBox="0 0 78 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path stroke="currentColor" d="M2.2002 2.34961C11.4702 2.34961 11.4802 10.3496 20.7502 10.3496C30.0202 10.3496 30.0302 2.34961 39.3002 2.34961C48.5702 2.34961 48.5702 10.3496 57.8502 10.3496C67.1302 10.3496 67.1302 2.34961 76.4102 2.34961" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" />
              </svg>
            </div>}
            {name}
          </h2>
        );
    }
  };

  return (
    <div className="flex items-center">
      <div className="flex-1">
        {renderTitle()}
      </div>
    </div>
  );
};
