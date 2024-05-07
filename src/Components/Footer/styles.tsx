import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100vw;
  background-color: #f3f3f3;
  padding: 30px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media (max-width: 485px) {
    padding: 30px;
  }
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
  @media (max-width: 555px) {
    font-size: 13px;
  }
`
export const FooterSocials = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  @media (max-width: 567px) {
    gap: 10px;
  }
  @media (max-width: 441px) {
    gap: 20px;
  }
`
export const FooterSocial = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #666;
  @media (max-width: 625px) {
    font-size: 14px;
  }
  @media (max-width: 542px) {
    font-size: 11px;
    gap: 4px;
  }
  @media (max-width: 441px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const FooterIcon = styled.img`
  width: 26px;
  height: 26px;
  object-fit: cover;
  @media (max-width: 625px) {
    width: 22px;
    height: 22px;
  }
  @media (max-width: 542px) {
    width: 18px;
    height: 18px;
  }
`