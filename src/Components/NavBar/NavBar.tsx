import React, { useEffect, useState } from 'react'
import { Blacked, GoToOnlineMall, HoverMenuWrapper, NavBarLogo, NavBarMenu, NavBarMenus, NavBarWrapper } from './styles';
import Logo from '../../Assets/imgs/STO_logo.png'
import HoverMenu from './HoverMenu';
import { useLocation, useNavigate } from 'react-router-dom';

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
    }
  }, [location.state]);

  return (
    <>
      <Blacked 
        style={{ display: isHovered ? 'block' : 'none' }} 
        onMouseEnter={() => setIsHovered(false)}
      />
      <NavBarWrapper>
        <NavBarLogo src={Logo} onClick={() => navigate('/')} />
        <NavBarMenus onMouseEnter={() => setIsHovered(true)}>
          <NavBarMenu>Company</NavBarMenu>
          <NavBarMenu onClick={handleScrollToBrands}>Brands</NavBarMenu>
          <NavBarMenu onClick={() => navigate('/hr')}>HR</NavBarMenu>
          <NavBarMenu>Recruit</NavBarMenu>
          <NavBarMenu>CSR</NavBarMenu>
        </NavBarMenus>
        <GoToOnlineMall onClick={() => window.open('https://www.stco.co.kr/')}>online mall</GoToOnlineMall>
        <HoverMenuWrapper 
          style={{ opacity: isHovered ? '1' : '0' }}
        >
          <HoverMenu />
        </HoverMenuWrapper>
      </NavBarWrapper>
    </>
  )
}

export default React.memo(NavBar);