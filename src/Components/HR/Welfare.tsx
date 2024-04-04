import React from 'react'
import { HRCultureWrapper, HRSubTitle, HRTitle } from '../../organism/HR/styles';
import welfare from '../../Assets/imgs/HR/welfare.png';

export const Welfare = () => {
  return (
    <HRCultureWrapper>
      <HRTitle>Welfare</HRTitle>
      <HRSubTitle style={{textAlign: 'center', lineHeight: 1.2}}>
        복리후생<br />
        <span style={{fontSize: 15}}>임직원들의 사기를 진작시키고, 일하기 좋은 회사를 만들기 위해 다양한 복리후생제도를 시행하고 있습니다.</span>
      </HRSubTitle>
      <img src={welfare} />
    </HRCultureWrapper>
  )
}

export default React.memo(Welfare);