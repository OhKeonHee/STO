import React, { useEffect, useState } from 'react'
import { Blacked, GoToOnlineMall, HoverMenuWrapper, MobileNavBarDetail, MobileNavBarDetailMenu, MobileNavBarMenu, MobileNavBarMenus, MobileNavBarWrapper, NavBarIcon, NavBarLogo, NavBarMenu, NavBarMenus, NavBarWrapper } from './styles';
import Logo from '../../Assets/imgs/STO_logo.png'
import HoverMenu from './HoverMenu';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const scrollToBrands = () => {
  window.scrollTo({
    top: 1500,
    behavior: 'smooth',
  });
};

export const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const [clickBar, setClickBar] = useState(false);
  const [mobileCompany, setMobileCompany] = useState(false);
  const [mobileRecruit, setMobileRecruit] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScrollToBrands = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToBrands: true } });
    } else {
      scrollToBrands();
      setClickBar(false);
    }
  };

  useEffect(() => {
    if (location.state && location.state.scrollToBrands) {
      scrollToBrands();
      setIsHovered(false);
      setClickBar(false);
    }
  }, [location.state]);

  return (
    <>
      <Blacked 
        style={{ display: isHovered ? 'block' : 'none' }} 
        onMouseEnter={() => setIsHovered(false)}
        onClick={() => setIsHovered(false)}
      />
      <NavBarWrapper style={{ justifyContent: width >= 700 ? 'center' : 'space-between' }}>
        <NavBarLogo src={Logo} onClick={() => navigate('/')} />
        {width >= 700 ? (
          <>
            <NavBarMenus onMouseEnter={() => setIsHovered(true)}>
              <NavBarMenu onClick={() => setIsHovered(true)}>Company</NavBarMenu>
              <NavBarMenu onClick={handleScrollToBrands}>Brands</NavBarMenu>
              <NavBarMenu onClick={() => {navigate('/hr'); setIsHovered(false)}}>HR</NavBarMenu>
              <NavBarMenu onClick={() => setIsHovered(true)}>Recruit</NavBarMenu>
              <NavBarMenu onClick={() => {navigate('/csr'); setIsHovered(false)}}>CSR</NavBarMenu>
            </NavBarMenus>
            <GoToOnlineMall onClick={() => window.open('https://www.stco.co.kr/')}>online mall</GoToOnlineMall>
          </>
        ) : (
          <NavBarIcon onClick={() => setClickBar(true)}>
            <FaBars />
          </NavBarIcon>
        )}
        <HoverMenuWrapper 
          style={{ opacity: isHovered ? '1' : '0' }}
        >
          <HoverMenu isHovered={isHovered} setIsHovered={setIsHovered} />
        </HoverMenuWrapper>
      </NavBarWrapper>
      {clickBar && (
        <MobileNavBarWrapper>
          <NavBarLogo src={Logo} style={{width: 170, height: 130, position: 'absolute', top: 50}} />
          <MobileNavBarMenus>
            <MobileNavBarMenu onClick={() => setMobileCompany(!mobileCompany)}>
              Company
              <NavBarIcon>
                {mobileCompany ? <FaChevronUp /> : <FaChevronDown />}
              </NavBarIcon>
            </MobileNavBarMenu>
            <MobileNavBarDetail style={{display: mobileCompany ? 'flex' : 'none'}}>
              <MobileNavBarDetailMenu onClick={() => {navigate('/company/IR'); setClickBar(false)}}>IR</MobileNavBarDetailMenu>
              <MobileNavBarDetailMenu onClick={() => {navigate('/company/news'); setClickBar(false)}}>NEWS</MobileNavBarDetailMenu>
            </MobileNavBarDetail>
            <MobileNavBarMenu onClick={handleScrollToBrands}>Brands</MobileNavBarMenu>
            <MobileNavBarMenu onClick={() => {navigate('/hr'); setClickBar(false)}}>HR</MobileNavBarMenu>
            <MobileNavBarMenu onClick={() => setMobileRecruit(!mobileRecruit)}>
              Recruit
              <NavBarIcon>
                {mobileRecruit ? <FaChevronUp /> : <FaChevronDown />}
              </NavBarIcon>
            </MobileNavBarMenu>
            <MobileNavBarDetail style={{display: mobileRecruit ? 'flex' : 'none'}}>
              <MobileNavBarDetailMenu onClick={() => {navigate('/recruit/apply'); setClickBar(false)}}>Apply</MobileNavBarDetailMenu>
              <MobileNavBarDetailMenu onClick={() => {navigate('/recruit/job'); setClickBar(false)}}>Job</MobileNavBarDetailMenu>
              <MobileNavBarDetailMenu onClick={() => {navigate('/recruit/faq'); setClickBar(false)}}>FAQ</MobileNavBarDetailMenu>
            </MobileNavBarDetail>
            <MobileNavBarMenu onClick={() => {navigate('/csr'); setClickBar(false)}}>CSR</MobileNavBarMenu>
            <MobileNavBarMenu className='onlineMall' onClick={() => window.open('https://www.stco.co.kr/')}>Online Mall</MobileNavBarMenu>
            <MobileNavBarMenu className='close'>
              <NavBarIcon onClick={() => setClickBar(false)}>
                <IoClose />
              </NavBarIcon>
            </MobileNavBarMenu>
          </MobileNavBarMenus>
        </MobileNavBarWrapper>
      )}
    </>
  )
}

export default React.memo(NavBar);