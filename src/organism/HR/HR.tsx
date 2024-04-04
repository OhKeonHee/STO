import React from 'react'
import { HRWrapper } from './styles';
import People from '../../Components/HR/People';
import Culture from '../../Components/HR/Culture';
import Welfare from '../../Components/HR/Welfare';
import GotoTopBtn from '../../Components/GotoTopBtn';

export const HR = () => {
  return (
    <HRWrapper>
      <People />
      <Culture />
      <Welfare />
      <GotoTopBtn />
    </HRWrapper>
  )
}

export default React.memo(HR);