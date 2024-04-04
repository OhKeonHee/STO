import React from 'react'
import { HRCultureWrapper, HRSubTitle, HRTitle } from '../../organism/HR/styles';
import culture from '../../Assets/imgs/HR/culture.png';

export const Culture = () => {
  return (
    <HRCultureWrapper>
      <HRTitle>Culture</HRTitle>
      <HRSubTitle style={{textAlign: 'center', lineHeight: 1.2}}>
        인사제도<br />
        <span style={{fontSize: 15}}>연공 서열 중심이 아닌 성과 중심의 인사제도를 운영하고 있습니다.</span>
      </HRSubTitle>
      <img src={culture} />
    </HRCultureWrapper>
  )
}

export default React.memo(Culture);