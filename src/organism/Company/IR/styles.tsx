import { Input, Table } from "antd";
import styled from "styled-components";

export const IRWrapper = styled.div`
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 820px) {
    padding: 80px 20px;
  }
`
export const IRTitle = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: #111;
  margin-bottom: 20px;
  letter-spacing: -0.4px;
`
export const IRTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 8px;
  span {
    width: 2px;
    height: 20px;
    background-color: #111;
  }
  @media (max-width: 500px) {
    gap: 10px;
    span {
      width: 1px;
    }
  }
  &.jobTabs {
    @media (max-width: 880px) {
      gap: 10px;
      span {
        width: 1px;
      }
    }
  }
`
export const IRTab = styled.button`
  font-family: 'Pretendard';
  font-size: 18px;
  padding: 8px 12px;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 15px;
    padding: 8px;
    white-space: nowrap;
  }
  @media (max-width: 450px) {
    font-size: 13px;
    padding: 4px;
  }
  &.jobTab {
    @media (max-width: 650px) {
      font-size: 15px;
      padding: 8px;
      white-space: nowrap;
    }
    @media (max-width: 500px) {
      font-size: 13px;
      padding: 4px;
    }
    @media (max-width: 420px) {
      font-size: 12px;
      padding: 0px;
    }
  }
`
export const IRContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  gap: 10px;
  .ant-table-wrapper {
    width: 100%;
    max-width: 1100px;
    .ant-table-cell {
      font-family: 'Pretendard';
      text-align: center;
    }
    .ant-table-content {
      .ant-table-thead > tr > th {
        background-color: #f1f1f1;
        white-space: nowrap;
        @media (max-width: 600px) {
          font-size: 12px;
        }
        @media (max-width: 455px) {
          font-size: 10px;
        }
      }
    }
    .ant-pagination {
      justify-content: center;
      * {
        font-family: 'Pretendard';
        @media (max-width: 600px) {
          font-size: 12px;
        }
      }
    }
  }
  &.select {
    .ant-pagination {
      display: none;
    }
  }
`
export const IRSearchArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 1100px;
  .ant-input {
    width: 200px;
    border-right: none;
    border-radius: 6px 0 0 6px;
    &::placeholder {
      font-family: 'Pretendard';
    }
  }
`
export const IRSearchIcon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #4096ff;
  border-radius: 0 6px 6px 0;
  background-color: #4096ff;
  color: #fff;
`
// ** Rule.tsx
export const RulePart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1000px;
`
export const RuleTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 6px;
`
export const RuleContent = styled.p`
  font-size: 15px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`
// ** BusinessSelect.tsx
export const GoToListWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 1100px;
  margin-top: 20px;
  button {
    background-color: #0072fd;
    color: #fff;
    padding: 5px 14px;
    border-radius: 4px;
    font-family: 'Pretendard';
    font-size: 15px;
    border: 1px solid #0072fd;
    transition: all.3s;
    &:hover {
      color: #0072fd;
      background-color: #fff;
    }
  }
`