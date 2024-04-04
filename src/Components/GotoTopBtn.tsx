import React from 'react'
import styled from 'styled-components';

export const GotoTopBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <TopBtn onClick={scrollToTop}>TOP</TopBtn>
  )
}

export default React.memo(GotoTopBtn);

const TopBtn = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: #b50202;
  color: #fff;
  font-family: 'Pretendard';
  font-weight: bold;
  font-size: 16px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
`