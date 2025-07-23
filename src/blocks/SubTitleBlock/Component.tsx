import React from 'react'

import type { SubTitleBlock as SubTitleBlockProps } from '@/payload-types'
import { SubTitle } from '../../components/SubTitle'

export const SubTitleBlock: React.FC<SubTitleBlockProps> = ({ id, name }) => {

  return (
    <SubTitle {...{ id, name }} />
  )
}
