import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100vw;
  background-color: #f3f3f3;
  padding: 30px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
export const FooterLogo = styled.img`
  width: 50px;
  object-fit: contain;
`
export const FooterTxt = styled.p`
  font-size: 15px;
  color: #666;
  letter-spacing: -1px;
  font-weight: 500;
`
export const FooterSocials = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`
export const FooterSocial = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #666;
`
export const FooterIcon = styled.img`
  width: 26px;
  height: 26px;
  object-fit: cover;
`