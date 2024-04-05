import React, { useState } from 'react'
import { IRTab, IRTabs, IRTitle, IRWrapper } from '../../Company/IR/styles';
import Disclosure from '../../../Components/IR/Disclosure';
import Stock from '../../../Components/IR/Stock';
import Rule from '../../../Components/IR/Rule';
import BusinessPerformance from '../../../Components/IR/BusinessPerformance';
import BusinessSelect from '../../../Components/IR/BusinessSelect';
import Employment from '../../../Components/Recruit/Employment';
import ApplicationWrite from '../../../Components/Recruit/ApplicationWrite';
import ApplicationEdit from '../../../Components/Recruit/ApplicationEdit';
import ApplicationCheck from '../../../Components/Recruit/ApplicationCheck';

export const Apply = () => {
  const [tab, setTab] = useState('채용공고');
  const [select, setSelect] = useState(0);

  return (
    <>
      {select == 0 ? (
        <IRWrapper>
          <IRTitle>Apply</IRTitle>
          <IRTabs>
            <IRTab
              onClick={() => setTab('채용공고')}
              style={{color: tab === '채용공고'? '#b50202' : '#111'}}
            >
              채용공고
            </IRTab>
            <span />
            <IRTab
              onClick={() => setTab('지원서작성')}
              style={{color: tab === '지원서작성'? '#b50202' : '#111'}}
            >
              지원서 작성
            </IRTab>
            <span />
            <IRTab
              onClick={() => setTab('지원서수정')}
              style={{color: tab === '지원서수정'? '#b50202' : '#111'}}
            >
              지원서 수정
            </IRTab>
            <span />
            <IRTab
              onClick={() => setTab('지원결과확인')}
              style={{color: tab === '지원결과확인'? '#b50202' : '#111'}}
            >
              지원결과 확인
            </IRTab>
          </IRTabs>
          {tab === '채용공고' && <Employment />}
          {tab === '지원서작성' && <ApplicationWrite />}
          {tab === '지원서수정' && <ApplicationEdit />}
          {tab === '지원결과확인' && <ApplicationCheck />}
        </IRWrapper>
      ): 
      (
        <BusinessSelect select={select} setSelect={setSelect} />
      )}
    </>
  )
}

export default React.memo(Apply);