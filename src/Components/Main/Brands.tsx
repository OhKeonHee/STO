import React, { useEffect, useState } from 'react'
import { BrandsContent, BrandsImg, BrandsImgContent, BrandsTitle, BrandsTxt, BrandsTxtContent, BrandsTxtTitle, BrandsWrapper } from '../../organism/Main/styles';
import STCO_Logo from '../../Assets/imgs/Main/Brands/stco_Logo.png'
import STCO_Content from '../../Assets/imgs/Main/Brands/stco.jpg'
import diems_Logo from '../../Assets/imgs/Main/Brands/diems_Logo.png'
import diems_Content from '../../Assets/imgs/Main/Brands/diems.jpg'
import codi_Logo from '../../Assets/imgs/Main/Brands/codigallery_Logo.png'
import codi_Content from '../../Assets/imgs/Main/Brands/codigallery.jpg'
import zero_Logo from '../../Assets/imgs/Main/Brands/zerolounge_Logo.png'
import zero_Content from '../../Assets/imgs/Main/Brands/zerolounge.jpg'

export const Brands = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <BrandsWrapper>
      <BrandsTitle>Brands</BrandsTitle>
      <BrandsContent className='STCO'>
        <BrandsImg className='logo' src={STCO_Logo} />
        <BrandsImgContent>
          <BrandsImg className='content' src={STCO_Content} />
          <BrandsTxt className='STCO'>
            <BrandsTxtTitle>PROFESSIONAL OUTFITS, <span>STCO</span></BrandsTxtTitle>
            <BrandsTxtContent>
              합리적인 가격에 우수한 제품을 제공하는 것을 최우선으로<br />
              프로페셔널 라이프 스타일을 지향하는 남성 토털 브랜드 입니다.
            </BrandsTxtContent>
          </BrandsTxt>
        </BrandsImgContent>
      </BrandsContent>
      <BrandsContent className='diems'>
        {width >= 1000 ? (
          <>
            <BrandsImgContent>
              <BrandsImg className='content' src={diems_Content} />
              <BrandsTxt className='diems'>
                <BrandsTxtTitle>Carpe diem. whenever A trend is stylish</BrandsTxtTitle>
                <BrandsTxtContent>
                  일상 속 스타일리시하고 편안한 라이프 스타일을 추구하는<br />
                  모던 트레디셔널 캐주얼 브랜드입니다.
                </BrandsTxtContent>
              </BrandsTxt>
            </BrandsImgContent>
            <BrandsImg className='logo' src={diems_Logo} />
          </>
        ) : (
          <>
            <BrandsImg className='logo' src={diems_Logo} />
            <BrandsImgContent>
              <BrandsImg className='content' src={diems_Content} />
              <BrandsTxt className='diems'>
                <BrandsTxtTitle>Carpe diem. whenever A trend is stylish</BrandsTxtTitle>
                <BrandsTxtContent>
                  일상 속 스타일리시하고 편안한 라이프 스타일을 추구하는<br />
                  모던 트레디셔널 캐주얼 브랜드입니다.
                </BrandsTxtContent>
              </BrandsTxt>
            </BrandsImgContent>
          </>
        )}
      </BrandsContent>
      <BrandsContent className='codi'>
        <BrandsImg className='logo' src={codi_Logo} />
        <BrandsImgContent>
          <BrandsImg className='content' src={codi_Content} />
          <BrandsTxt className='codi'>
            <BrandsTxtTitle>Beyond Fashion to Art and Culture</BrandsTxtTitle>
            <BrandsTxtContent>
              심플&스타일리시 모던룩을 지향하는 패션에 관심있는 남성을 위해<br />
              코디하기 쉬운 베이직&트렌디한 아이템을 합리적인 가격으로 제공합니다.
            </BrandsTxtContent>
          </BrandsTxt>
        </BrandsImgContent>
      </BrandsContent>
      <BrandsContent className='zero'>
      {width >= 1000 ? (
          <>
            <BrandsImgContent>
              <BrandsImg className='content' src={zero_Content} />
              <BrandsTxt className='zero'>
                <BrandsTxtTitle>Gentlemen's Life Style Shop</BrandsTxtTitle>
                <BrandsTxtContent>
                  온라인 회원제 쇼핑몰 브랜드로 젠틀맨의 라이프 스타일과<br />
                  관련된 다양한 제품을 판매합니다.<br />
                  제로라운지의 유로회원들에게는 판매마진 ZERO의 가격으로<br />
                  지금껏 경험하지 못한 가격대비 최고의 혜택을 경험할 수 있습니다.
                </BrandsTxtContent>
              </BrandsTxt>
            </BrandsImgContent>
            <BrandsImg className='logo' src={zero_Logo} />
          </>
        ) : (
          <>
            <BrandsImg className='logo' src={zero_Logo} />
            <BrandsImgContent>
              <BrandsImg className='content' src={zero_Content} />
              <BrandsTxt className='zero'>
                <BrandsTxtTitle>Gentlemen's Life Style Shop</BrandsTxtTitle>
                <BrandsTxtContent>
                  온라인 회원제 쇼핑몰 브랜드로 젠틀맨의 라이프 스타일과<br />
                  관련된 다양한 제품을 판매합니다.<br />
                  제로라운지의 유로회원들에게는 판매마진 ZERO의 가격으로<br />
                  지금껏 경험하지 못한 가격대비 최고의 혜택을 경험할 수 있습니다.
                </BrandsTxtContent>
              </BrandsTxt>
            </BrandsImgContent>
          </>
        )}
      </BrandsContent>
    </BrandsWrapper>
  )
}

export default React.memo(Brands);