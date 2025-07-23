import React from 'react'

import type { TitleBlock as TitleBlockProps } from '@/payload-types'
import { Title } from '../../components/Title'

export const TitleBlock: React.FC<TitleBlockProps> = ({ id, name }) => {
  return (
    <Title {...{ id, name }} />
  )
}
