import React, { useState } from 'react'
import { IRTab, IRTabs, IRTitle, IRWrapper } from '../Company/IR/styles';
import Introduce from '../../Components/CSR/Introduce';
import CSRNews from '../../Components/CSR/CSRNews';

export const CSR = () => {
  const [tab, setTab] = useState('사회공헌');
  const [select, setSelect] = useState(0);

  return (
    <IRWrapper>
      <IRTitle>Corporate Social Responsibility</IRTitle>
      <IRTabs>
        <IRTab
          onClick={() => setTab('사회공헌')}
          style={{color: tab === '사회공헌'? '#b50202' : '#111'}}
        >
          사회공헌 소개
        </IRTab>
        <span />
        <IRTab
          onClick={() => setTab('소식')}
          style={{color: tab === '소식'? '#b50202' : '#111'}}
        >
          소식 및 활동내역
        </IRTab>
      </IRTabs>
      {tab === '사회공헌' && <Introduce />}
      {tab === '소식' && <CSRNews />}
    </IRWrapper>
  )
}

export default React.memo(CSR);