import styled from "styled-components";

export const ApplicationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1000px;
  margin-top: 30px;
`
export const ApplicationHeader = styled.div`
  width: 100%;
  padding: 8px 16px;
  font-size: 18px;
  font-weight: bold;
`
export const ApplicationContent = styled.div`
  border-top: 2px solid #111;
  border-bottom: 2px solid #111;
  padding: 12px 0;
  width: 100%;
`
export const ApplicationCaution = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;
  padding-top: 0px;
  width: 100%;
  font-size: 15px;
  border-bottom: 1px solid #111;
  span {
    display: block;
    font-weight: bold;
  }
`
export const Terms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`
export const TermWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
  color: #616161;
  white-space: pre-wrap;
  width: 100%;
  border: 1px solid #ddd;
  background-color: #f3f3f3;
`
export const TermHeader = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 12px;
  border-bottom: 1px solid #ddd;
  width: 100%;
`
export const TermFooter = styled.div`
  font-size: 14px;
  font-weight: 600;
  padding: 8px 12px;
  border-bottom: 1px solid #ddd;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  label {
    cursor: pointer;
    user-select: none;
  }
`
export const TermContent = styled.div`
  padding: 12px 16px;
  height: 160px;
  overflow-y: auto;
  background-color: #fff;
`
export const ApplicationForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 100%;
  margin-top: 30px;
  gap: 12px;
`
export const FormTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
`
export const FormPart = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  label {
    width: 80px;
    font-weight: 500;
  }
  .ant-select {
    min-width: 200px;
  }
  .ant-input {
    max-width: 200px;
    &::placeholder {
      font-family: 'Pretendard';
    }
  }
  button {
    border: 1px solid #4096ff;
    background-color: #4096ff;
    color: #fff;
    font-family: 'Pretendard';
    padding: 4px 12px;
    border-radius: 4px;
    font-weight: 500;
    transition: all.3s;
    display: flex;
    align-items: center;
    gap: 8px;
    &:hover {
      background-color: #fff;
      color: #4096ff;
    }
    &.re {
      border: 1px solid #ddd;
      background-color: #ddd;
      color: #111;
      &:hover {
        background-color: #fff;
        border: 1px solid #111;
      }
    }
    &.findPassword {
      border: 1px solid #111;
      color: #fff;
      background-color: #111;
      &:hover {
        background-color: #fff;
        color: #111;
      }
    }
    &.submit {
      padding: 8px 16px;
    }
  }
`
export const FormRadios = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 200px;
  > div {
    display: flex;
    align-items: center;
    > label {
      width: auto;
    }
  }
`