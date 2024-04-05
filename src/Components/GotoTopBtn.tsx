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
  right: 50px;
  bottom: 50px;
  background-color: #b50202;
  color: #fff;
  font-family: 'Pretendard';
  font-weight: bold;
  font-size: 16px;
  width: 70px;
  height: 70px;
  border-radius: 70px;
  z-index: 99;
`