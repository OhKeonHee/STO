import React from 'react'
import main_roll_1 from '../../Assets/imgs/Main/main_roll_1.jpg'
import main_roll_2 from '../../Assets/imgs/Main/main_roll_2.jpg'
import main_roll_3 from '../../Assets/imgs/Main/main_roll_3.jpg'
import main_roll_4 from '../../Assets/imgs/Main/main_roll_4.jpg'
import main_roll_5 from '../../Assets/imgs/Main/main_roll_5.jpg'
import main_roll_6 from '../../Assets/imgs/Main/main_roll_6.jpg'
import { MainSliderImg, MainSliderImgWrapper, StyledSlider } from '../../organism/Main/styles'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const MainImgSlider = () => {
  const ImgList = [
    {
      src: main_roll_1,
      alt: 'STCO'
    },
    {
      src: main_roll_2,
      alt: 'diems'
    },
    {
      src: main_roll_3,
      alt: 'gentlemens concept'
    },
    {
      src: main_roll_4,
      alt: 'haus'
    },
    {
      src: main_roll_5,
      alt: 'renew work'
    },
    {
      src: main_roll_6,
      alt: 'CODI gallery'
    },
  ]
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <StyledSlider {...settings}>
      {ImgList?.map((it, idx) => (
        <MainSliderImgWrapper key={idx}>
          <MainSliderImg src={it?.src} alt={it?.alt} />
        </MainSliderImgWrapper>
      ))}
    </StyledSlider>
  );
}

export default React.memo(MainImgSlider);