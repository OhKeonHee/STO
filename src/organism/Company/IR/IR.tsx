import React, { useState } from 'react'
import { IRTab, IRTabs, IRTitle, IRWrapper } from './styles';
import Disclosure from '../../../Components/IR/Disclosure';
import Stock from '../../../Components/IR/Stock';
import Rule from '../../../Components/IR/Rule';
import BusinessPerformance from '../../../Components/IR/BusinessPerformance';
import BusinessSelect from '../../../Components/IR/BusinessSelect';

export const IR = () => {
  const [tab, setTab] = useState('공시정보');
  const [select, setSelect] = useState(0);

  return (
    <>
      {select == 0 ? (
        <IRWrapper>
          <IRTitle>Investor Relations</IRTitle>
          <IRTabs>
            <IRTab
              onClick={() => setTab('공시정보')}
              style={{color: tab === '공시정보'? '#b50202' : '#111'}}
            >
              공시정보
            </IRTab>
            <span />
            <IRTab
              onClick={() => setTab('주가정보')}
              style={{color: tab === '주가정보'? '#b50202' : '#111'}}
            >
              주가정보
            </IRTab>
            <span />
            <IRTab
              onClick={() => setTab('내부정보관리규정')}
              style={{color: tab === '내부정보관리규정'? '#b50202' : '#111'}}
            >
              내부정보관리규정
            </IRTab>
            <span />
            <IRTab
              onClick={() => setTab('경영실적')}
              style={{color: tab === '경영실적'? '#b50202' : '#111'}}
            >
              경영실적
            </IRTab>
          </IRTabs>
          {tab === '공시정보' && <Disclosure />}
          {tab === '주가정보' && <Stock />}
          {tab === '내부정보관리규정' && <Rule />}
          {tab === '경영실적' && <BusinessPerformance setSelect={setSelect} />}
        </IRWrapper>
      ): 
      (
        <BusinessSelect select={select} setSelect={setSelect} />
      )}
    </>
  )
}

export default React.memo(IR);