import React, { useEffect, useState } from 'react'
import { JobPart, JobParts, JobSubTitle, JobTitle, JobWrapper } from './styles';
import { IRTab, IRTabs } from '../../Company/IR/styles';
import { JobData } from '../../../Components/Data/JobData';
import GotoTopBtn from '../../../Components/GotoTopBtn';

export const Job = () => {
  const { Data } = JobData();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <JobWrapper>
      <JobTitle>Job Preview</JobTitle>
      <JobSubTitle>STO는 자율성, 다양성, 헌신의 가치를 함께 나눌 창의적인 인재와 함께 하겠습니다.</JobSubTitle>
      <IRTabs className='jobTabs'>
        <IRTab className='jobTab'>기획MD</IRTab>
        <span />
        <IRTab className='jobTab'>영업</IRTab>
        <span />
        <IRTab className='jobTab'>영업지원</IRTab>
        <span />
        <IRTab className='jobTab'>재무기획</IRTab>
        <span />
        <IRTab className='jobTab'>경영관리</IRTab>
        <span />
        <IRTab className='jobTab'>경영정보</IRTab>
      </IRTabs>
      <JobParts>
        {Data?.map((it, idx) => (
          <JobPart key={idx}>
            <div className='title'>
              <p>{it?.title}</p>
              <span>{it?.subTitle}</span>
            </div>
            <div style={{display: 'flex'}}>
              <div className='part' style={{display: width >= 755 ? 'block' : 'none'}}>
                {it?.parts}
              </div>
              <div className='content'>
                {it?.content}
              </div>
            </div>
          </JobPart>
        ))}
      </JobParts>
      <GotoTopBtn />
    </JobWrapper>
  )
}

export default React.memo(Job);