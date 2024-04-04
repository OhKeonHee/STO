import React from 'react'
import { FooterIcon, FooterLogo, FooterSocial, FooterSocials, FooterTxt, FooterWrapper } from './styles';
import Logo from '../../Assets/imgs/STO_logo.png'

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogo src={Logo} />
      <FooterTxt>회사명: (주)에스티오</FooterTxt>
      <FooterTxt>대표자 : 김흥수 / 서울시 강서구 양천로 583 우림블루나인비지니스센터 B동 15층</FooterTxt>
      <FooterTxt>통신판매업신고 : 제2009 서울강서 0684호 / 개인정보관리책임자 : 안중태</FooterTxt>
      <FooterTxt>대표메일주소 : stoonline@stco.co.kr / 대표번호 : 070-4687-7342</FooterTxt>
      <FooterTxt style={{marginTop: 40}}>Copyright ⓒ STO. All right reserved</FooterTxt>
      <FooterSocials>
        <FooterSocial onClick={() => window.open('https://pf.kakao.com/_PyWxnz')}>
          <FooterIcon src='https://image.codigallery.com/all_img/stcomall/2021/main/210420_newheader/kakaoplus.png' alt='카카오플러스' />
          Kakao Plus
        </FooterSocial>
        <FooterSocial onClick={() => window.open('https://pf.kakao.com/_PyWxnz')}>
          <FooterIcon src='https://image.codigallery.com/all_img/stcomall/2021/main/210420_newheader/youtube.png' alt='유투브' />
          Youtube
        </FooterSocial>
        <FooterSocial onClick={() => window.open('https://www.instagram.com/stco_official/')}>
          <FooterIcon src='https://image.codigallery.com/all_img/stcomall/2021/main/210420_newheader/instagram.png' alt='인스타그램' />
          Instagram
        </FooterSocial>
        <FooterSocial onClick={() => window.open('https://www.facebook.com/thestco')}>
          <FooterIcon src='https://image.codigallery.com/all_img/stcomall/2021/main/210420_newheader/facebook.png' alt='페이스북' />
          Facebook
        </FooterSocial>
      </FooterSocials>
    </FooterWrapper>
  )
}

export default React.memo(Footer);