import React, { useEffect, useState } from 'react'
import { Blacked, GoToOnlineMall, HoverMenuWrapper, MobileNavBarMenu, MobileNavBarMenus, MobileNavBarWrapper, NavBarIcon, NavBarLogo, NavBarMenu, NavBarMenus, NavBarWrapper } from './styles';
import Logo from '../../Assets/imgs/STO_logo.png'
import HoverMenu from './HoverMenu';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
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
    }
  };

  useEffect(() => {
    if (location.state && location.state.scrollToBrands) {
      scrollToBrands();
      setIsHovered(false);
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
            <MobileNavBarMenu>
              Company
              <NavBarIcon>
                <FaChevronDown />
              </NavBarIcon>
            </MobileNavBarMenu>
            <MobileNavBarMenu>Brands</MobileNavBarMenu>
            <MobileNavBarMenu>HR</MobileNavBarMenu>
            <MobileNavBarMenu>Recruit</MobileNavBarMenu>
            <MobileNavBarMenu>CSR</MobileNavBarMenu>
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