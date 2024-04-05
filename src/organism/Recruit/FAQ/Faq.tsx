import React, { useState } from 'react'
import { IRTab, IRTabs, IRTitle, IRWrapper } from '../../Company/IR/styles';
import Disclosure from '../../../Components/IR/Disclosure';
import Stock from '../../../Components/IR/Stock';
import ApplicationFAQ from '../../../Components/FAQ/ApplicationFAQ';
import EmploymentFAQ from '../../../Components/FAQ/EmploymentFAQ';

export const Faq = () => {
  const [tab, setTab] = useState('입사지원');

  return (
    <IRWrapper>
      <IRTitle>FAQ</IRTitle>
      <IRTabs>
        <IRTab
          onClick={() => setTab('입사지원')}
          style={{color: tab === '입사지원'? '#b50202' : '#111'}}
        >
          입사지원 FAQ
        </IRTab>
        <span />
        <IRTab
          onClick={() => setTab('채용문의')}
          style={{color: tab === '채용문의'? '#b50202' : '#111'}}
        >
          채용문의 Q&A
        </IRTab>
      </IRTabs>
      {tab === '입사지원' && <ApplicationFAQ />}
      {tab === '채용문의' && <EmploymentFAQ />}
    </IRWrapper>
  )
}

export default React.memo(Faq);