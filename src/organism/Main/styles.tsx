import styled from "styled-components";
import Slider from "react-slick";
import '../../Assets/fonts/GmarketSans.css'

export const MainWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`
// ** MainImgSlider.tsx =====
export const StyledSlider = styled(Slider)`
  .slick-prev {
    z-index: 1;
    left: 30px;
  }
  .slick-next {
    right: 40px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    opacity: 0.5;
    color: white;
  }
  .slick-dots {
    display: flex;
    justify-content: center;
    bottom: 30px;
    color: white;
    li button:before {
      color: white;
    }
    li.slick-active button:before {
      color: white;
    }
  }
`
export const MainSliderImgWrapper = styled.div`
  width: auto;
  height: auto;
`
export const MainSliderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

// ** Philosophy.tsx =====
export const PhilosophyWrapper = styled.div`
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
export const PhilosophyTitle = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: #111;
  margin-bottom: 50px;
  letter-spacing: -0.4px;
`
export const PhilosophySubTitle = styled.p`
  font-size: 22px;
  color: #111;
  font-weight: 600;
  letter-spacing: -0.4px;
  @media (max-width: 700px) {
    font-size: 18px;
  }
`
export const PhilosophyTxt = styled.p`
  font-size: 18px;
  color: #111;
  font-weight: 400;
  letter-spacing: -0.4px;
  @media (max-width: 1000px) {
    font-size: 14px;
    white-space: nowrap;
  }
  @media (max-width: 700px) {
    font-size: 14px;
    white-space: pre-wrap;
    text-align: center;
  }
`
export const PhilosophyContent = styled.div`
  position: relative;
  margin-top: 30px;
  height: 600px;
  width: 1120px;
  @media (max-width: 1121px) {
    width: auto;
    min-width: 700px;
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    gap: 30px;
    min-width: 100%;
  }
`
export const PhilosophyContentTxtArea = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  color: #fff;
  border-radius: 20px;
  span {
    font-size: 20px;
  }
  .vertical {
    height: 60px;
    width: 1px;
    background-color: #fff;
  }
  p {
    font-size: 14px;
  }
  &.diversity {
    background-color: #EC2029;
    right: 80px;
    top: 80px;
    @media (max-width: 1121px) {
      right: -80px;
    }
    @media (max-width: 1000px) {
      right: 0px;
    }
    @media (max-width: 700px) {
      left: 0px;
      top: 0;
    }
  }
  &.dedication {
    background-color: #FAB429;
    right: 180px;
    bottom: 80px;
    @media (max-width: 1121px) {
      right: 0;
    }
    @media (max-width: 1000px) {
      bottom: 100px;
    }
    @media (max-width: 700px) {
      left: 0px;
      top: 0;
    }
  }
  &.autonomy {
    background-color: #EE5027;
    left: 80px;
    top: 180px;
    @media (max-width: 1121px) {
      left: -80px;
    }
    @media (max-width: 1000px) {
      left: -20px;
    }
    @media (max-width: 700px) {
      left: 0px;
      top: 0;
    }
  }
  @media (max-width: 1000px) {
    span {
      font-size: 16px;
    }
    p {
      font-size: 11px;
    }
  }
  @media (max-width: 700px) {
    position: relative;
    width: 80%;
  }
`
export const PhilosophyLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  object-fit: contain;
  @media (max-width: 700px) {
    display: none;
  }
`

// ** History.tsx =====
export const HistoryWrapper = styled.div`
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  img {
    object-fit: contain;
    width: auto;
    margin-top: 20px;
  }
`
export const HistoryTitle = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: #111;
  margin-bottom: 50px;
  letter-spacing: -0.4px;
`

// ** Brands.tsx =====
export const BrandsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
export const BrandsTitle = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: #111;
  margin-bottom: 50px;
  letter-spacing: -0.4px;
`
export const BrandsContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  &.diems {
    gap: 80px;
    .logo {
      max-width: 200px;
    }
  }
  &.codi {
    gap: 40px;
    .logo {
      max-width: 230px;
    }
  }
  &.zero {
    gap: 30px;
    .logo {
      max-width: 200px;
    }
  }
`
export const BrandsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  &.logo {
    max-width: 400px;
  }
  &.content {
    max-width: 800px;
  }
`
export const BrandsImgContent = styled.div`
  max-width: 800px;
  position: relative;
`
export const BrandsTxt = styled.div`
  position: absolute;
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;;
  gap: 20px;
  background-color: #f3f2f2;
  &.STCO {
    top: 0;
    left: 0;
  }
  &.diems {
    top: 0;
    right: 0;
  }
  &.codi {
    bottom: 65px;
    right: 0;
  }
  &.zero {
    top: 0;
    left: 0;
  }
`
export const BrandsTxtTitle = styled.p`
  font-size: 16px;
  color: #2e2e2e;
  font-weight: 600;
  font-family: 'GmarketSans';
  span {
    font-weight: bold;
    color: #111;
  }
  @media (max-width: 1150px) {
    font-size: 14px;
  }
`
export const BrandsTxtContent = styled.p`
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  @media (max-width: 1150px) {
    font-size: 11px;
  }
`

// ** Contact.tsx =====
export const ContactWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`
export const ContactTitle = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: #111;
  margin-bottom: 50px;
  letter-spacing: -0.4px;
`
export const MapInfoWindow = styled.div`
  padding: 10px;
  display: flex;
  width: 180px;
  height: 85px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #111;
  font-weight: bold;
  a {
    background-color: #0d6efd;
    color: #fff;
    font-size: 14px;
    padding: 6px 12px;
    border-radius: 4px;
    transition: all.3s;
    border: 1px solid #0d6efd;
    font-weight: 400;
    &:hover {
      color: #0d6efd;
      background-color: #fff;
      font-weight: bold;
    }
  }
`
export const Directions = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
  width: 1000px;
  @media (max-width: 1000px) {
    width: 80%;
    padding-left: 0px;
    padding-right: 0px;
  }
`
export const Traffic = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #111;
`
export const Address = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 50px;
`
export const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  > * {
    scale: 2;
  }
`
export const ContactInfoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`
export const ContactInfoTitle = styled.p`
  color: #111;
  font-size: 18px;
  letter-spacing: -0.4px;
  font-weight: 600;
`
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  p {
    font-size: 14px;
    > span {
      font-weight: bold;
    }
  }
  .badge {
    font-size: 14px;
    color: #fff;
    padding: 2px;
    margin-right: 8px;
  }
`