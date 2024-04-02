import styled from "styled-components";

export const Blacked = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
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
`
export const NavBarMenus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0px 100px;
  height: 70px;
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
`
export const GoToOnlineMall = styled.button`
  text-transform: uppercase;
  color: #F5141C;
  font-size: 16px;
  font-weight: bold;
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