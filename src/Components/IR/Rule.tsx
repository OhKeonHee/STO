import React from 'react'
import { IRContent, RuleContent, RulePart, RuleTitle } from '../../organism/Company/IR/styles';
import { RuleData } from '../Data/RuleData';
import GotoTopBtn from '../GotoTopBtn';

export const Rule = () => {
  const { Data } = RuleData();
  return (
    <IRContent>
      {Data?.map((it, idx) => (
        <RulePart key={idx} style={{marginTop: -50}}>
          <RuleTitle style={{ letterSpacing: 10, marginTop: 60 }}>
            {it?.title}
          </RuleTitle>
          {it?.article?.map((it, idx) => (
            <RuleContent key={idx}>
              <RuleTitle>{it?.title}</RuleTitle>
              {it?.content}
            </RuleContent>
          ))}
        </RulePart>
      ))}
      <GotoTopBtn />
    </IRContent>
  )
}

export default React.memo(Rule);