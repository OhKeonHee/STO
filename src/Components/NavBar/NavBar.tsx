import React, { useState } from 'react'
import { Blacked, GoToOnlineMall, HoverMenuWrapper, NavBarLogo, NavBarMenu, NavBarMenus, NavBarWrapper } from './styles';
import Logo from '../../Assets/imgs/STO_logo.png'
import HoverMenu from './HoverMenu';

export const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Blacked 
        style={{ display: isHovered ? 'block' : 'none' }} 
        onMouseEnter={() => setIsHovered(false)}
      />
      <NavBarWrapper>
        <NavBarLogo src={Logo} />
        <NavBarMenus onMouseEnter={() => setIsHovered(true)}>
          <NavBarMenu>Company</NavBarMenu>
          <NavBarMenu>Brands</NavBarMenu>
          <NavBarMenu>HR</NavBarMenu>
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