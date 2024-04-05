import React from 'react'
import { JobPart, JobParts, JobSubTitle, JobTitle, JobWrapper } from './styles';
import { IRTab, IRTabs } from '../../Company/IR/styles';
import { JobData } from '../../../Components/Data/JobData';
import GotoTopBtn from '../../../Components/GotoTopBtn';

export const Job = () => {
  const { Data } = JobData();
  return (
    <JobWrapper>
      <JobTitle>Job Preview</JobTitle>
      <JobSubTitle>STO는 자율성, 다양성, 헌신의 가치를 함께 나눌 창의적인 인재와 함께 하겠습니다.</JobSubTitle>
      <IRTabs>
        <IRTab>기획MD</IRTab>
        <span />
        <IRTab>영업</IRTab>
        <span />
        <IRTab>영업지원</IRTab>
        <span />
        <IRTab>재무기획</IRTab>
        <span />
        <IRTab>경영관리</IRTab>
        <span />
        <IRTab>경영정보</IRTab>
      </IRTabs>
      <JobParts>
        {Data?.map((it, idx) => (
          <JobPart key={idx}>
            <div className='title'>
              <p>{it?.title}</p>
              <span>{it?.subTitle}</span>
            </div>
            <div className='part'>
              {it?.parts}
            </div>
            <div className='content'>
              {it?.content}
            </div>
          </JobPart>
        ))}
      </JobParts>
      <GotoTopBtn />
    </JobWrapper>
  )
}

export default React.memo(Job);