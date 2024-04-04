import React from 'react'
import { HistoryTitle, HistoryWrapper } from '../../organism/Main/styles';
import history from '../../Assets/imgs/Main/history.jpg'

export const History = () => {
  return (
    <HistoryWrapper>
      <HistoryTitle>History</HistoryTitle>
      <img src={history} alt="history" />
    </HistoryWrapper>
  )
}

export default React.memo(History);