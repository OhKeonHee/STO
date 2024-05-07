import styled from "styled-components";

export const Blacked = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 8;
`
export const NavBarIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  > * {
    scale: 1.4;
  }
`
export const NavBarWrapper = styled.div`
  width: 100vw;
  min-height: 63px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 9;
`
export const NavBarLogo = styled.img`
  width: 170px;
  height: 50px;
  object-fit: contain;
  cursor: pointer;
  @media (max-width: 1000px) {
    width: 130px;
    height: 40px;
  }
`
export const NavBarMenus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0px 100px;
  height: 70px;
  @media (max-width: 1140px) {
    margin: 0px 50px;
  }
  @media (max-width: 800px) {
    margin: 0px 10px;
  }
`
export const NavBarMenu = styled.div`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  width: 120px;
  text-align: center;
  color: #2d2c2c;
  &:hover {
    color: #b50202;
  }
  @media (max-width: 1000px) {
    font-size: 14px;
    width: 100px;
  }
`
export const GoToOnlineMall = styled.button`
  text-transform: uppercase;
  color: #F5141C;
  font-size: 16px;
  font-weight: bold;
  @media (max-width: 800px) {
    font-size: 13px;
  }
`
export const HoverMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  background-color: #fff;
  width: 100vw;
  top: 70px;
  transition: .3s;
  -webkit-transition: all 0.3s ease-in;
  opacity: 0;
  border-top: 1px solid #2d2c2c;
  padding: 20px;
  > div {
    display: flex;
    justify-content: center;
    margin-left: 64px;
  }
`
export const HoverMenuDisplay = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
`
export const Menu = styled.button`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Pretendard';
  padding: 10px 0;
  color: #2d2c2c;
  letter-spacing: -0.4px;
  &:hover {
    text-decoration: underline;
  }
`
export const MobileNavBarWrapper = styled.div`
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 220px;
`
export const MobileNavBarMenus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const MobileNavBarMenu = styled.div`
  color: #2d2c2c;
  font-size: 32px;
  font-weight: bold;
  width: 80vw;
  text-align: center;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.onlineMall {
    color: #F5141C;
  }
  &.close {
    position: absolute;
    bottom: 50px;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    > * {
      scale: 1.5;
    }
  }
  ${NavBarIcon} {
    > * {
      scale: 1;
    }
  }
`
export const MobileNavBarDetail = styled.div`
  background-color: #f1f1f1;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const MobileNavBarDetailMenu = styled.div`
  font-size: 22px;
  font-weight: bold;
`