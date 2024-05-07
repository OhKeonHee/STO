import styled from "styled-components";

export const JobWrapper = styled.div`
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1024px) {
    padding: 80px 20px;
  }
`
export const JobTitle = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: #111;
  margin-bottom: 20px;
  letter-spacing: -0.4px;
`
export const JobSubTitle = styled.p`
  font-size: 22px;
  font-weight: 400;
  color: #111;
  margin-bottom: 20px;
  letter-spacing: -0.4px;
  white-space: nowrap;
  @media (max-width: 780px) {
    font-size: 16px;
  }
  @media (max-width: 570px) {
    font-size: 14px;
  }
  @media (max-width: 470px) {
    font-size: 12px;
  }
  @media (max-width: 390px) {
    font-size: 11px;
  }
`
export const JobParts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  margin-top: 30px;
`
export const JobPart = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  border-bottom: 2px dashed #aaa;
  padding: 60px 0;
  padding-bottom: 40px;
  white-space: nowrap;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  .title {
    font-family: 'GmarketSans';
    text-align: left;
    font-size: 22px;
    font-weight: bold;
    line-height: 1.3;
    width: 150px;
    white-space: nowrap;
    span {
      font-size: 16px;
      font-weight: 400;
      display: block;
      @media (max-width: 1170px) {
        font-size: 13px;
      }
    }
  }
  .part {
    text-align: right;
    font-size: 16px;
    font-weight: 600;
    min-width: 100px;
    margin-right: 20px;
    @media (max-width: 1120px){
      font-size: 14px;
    }
    @media (max-width: 1024px){
      margin-left: 0px;
      text-align: left;
      margin-right: 0px;
    }
    @media (max-width: 850px){
      font-size: 12px;
      margin-right: -15px;
    }
  }
  .content {
    text-align: left;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.4px;
    > div {
      margin-bottom: 20px;
    }
    @media (max-width: 1120px){
      font-size: 14px;
    }
    @media (max-width: 850px){
      font-size: 12px;
    }
    @media (max-width: 620px){
      white-space: pre-wrap;
    }
  }
`