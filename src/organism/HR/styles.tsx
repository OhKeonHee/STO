import styled from "styled-components";

export const HRWrapper = styled.div`
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1024px) {
    padding: 80px 20px;
  }
`
export const HRTitle = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: #111;
  margin-bottom: 20px;
  letter-spacing: -0.4px;
`
export const HRSubTitle = styled.p`
  font-size: 22px;
  font-weight: 400;
  color: #111;
  margin-bottom: 20px;
  letter-spacing: -0.4px;
  @media (max-width: 600px) {
    font-size: 18px;
  }
  @media (max-width: 475px) {
    font-size: 15px;
  }
  @media (max-width: 400px) {
    font-size: 13px;
  }
`
export const HRParts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const HRPart = styled.div`
  display: flex;
  align-items: flex-start;
  border: 1px solid #ddd;
  padding: 40px 80px;
  padding-left: 50px;
  gap: 20px;
  border-radius: 100px;
  @media (max-width: 840px) {
    padding: 40px;
  }
`
export const HRPeopleImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  &.dedication {
    img {
      scale: 1.4;
      height: 200px;
    }
  }
`
export const HRPeopleImg = styled.img`
  width: 200px;
  object-fit: contain;
`
export const HRPeopleTxt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 16px;
  font-weight: 400;
  span {
    font-weight: 700;
  }
  @media (max-width: 905px) {
    font-size: 14px;
  }
`
export const HRCultureWrapper = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 50px;
  }
  @media (max-width: 1000px) {
    margin-top: 100px;
  }
`