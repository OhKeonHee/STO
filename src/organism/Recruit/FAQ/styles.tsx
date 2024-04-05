import styled from "styled-components";

export const SelectFAQModal = styled.div`
  width: 800px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 9;
  border-radius: 30px;
  padding: 30px;
` 
export const SelectFAQTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  color: #111;
  margin-bottom: 40px;
`
export const SelectFAQContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const SelectFAQPart = styled.div`
  display: flex;
  border: 1px solid #ccc;
  padding: 15px 30px;
  border-radius: 6px;
  gap: 30px;
  label {
    width: 70px;
    font-weight: 700;
    border-right: 1px solid #ddd;
  }
  span {
    font-weight: 600;
    white-space: pre-wrap;
    width: calc(100% - 100px);
  }
  .ant-input {
    max-width: 480px;
  }
  .submit {
    font-family: 'Pretendard';
    background-color: #4096ff;
    border: 1px solid #4096ff;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    transition: all.3s;
    border-radius: 4px;
    padding: 6px 16px;
    &:hover {
      color: #4096ff;
      background-color: #fff;
    }
  }
`
export const ModalIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
  > * {
    scale: 2;
  }
`