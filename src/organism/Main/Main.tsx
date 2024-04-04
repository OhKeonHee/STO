import React, { useEffect, useState } from 'react'
import MainImgSlider from '../../Components/Main/MainImgSlider';
import Philosophy from '../../Components/Main/Philosophy';
import { MainWrapper } from './styles';
import History from '../../Components/Main/History';
import Brands from '../../Components/Main/Brands';
import Contact from '../../Components/Main/Contact';
import GotoTopBtn from '../../Components/GotoTopBtn';

export const Main = () => {
  return (
    <MainWrapper>
      <MainImgSlider />
      <Philosophy />
      <Brands />
      <History />
      <Contact />
      <GotoTopBtn />
    </MainWrapper>
  );
}

export default React.memo(Main);