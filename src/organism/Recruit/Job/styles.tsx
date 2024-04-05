import styled from "styled-components";

export const JobWrapper = styled.div`
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    }
  }
  .part {
    text-align: right;
    font-size: 16px;
    font-weight: 600;
    min-width: 100px;
  }
  .content {
    text-align: left;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.4px;
    > div {
      margin-bottom: 20px;
    }
  }
`