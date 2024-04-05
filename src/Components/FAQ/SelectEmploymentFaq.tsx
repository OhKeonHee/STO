import React, { Dispatch, SetStateAction } from 'react'
import { Blacked } from '../NavBar/styles';
import { ModalIcon, SelectFAQContent, SelectFAQModal, SelectFAQPart, SelectFAQTitle } from '../../organism/Recruit/FAQ/styles';
import { ApplicationFAQ_Data } from '../Data/FAQ/ApplicationFAQ_Data';
import { IoClose } from "react-icons/io5";
import { Input } from 'antd';

interface Props {
  select: number;
  setSelect: Dispatch<SetStateAction<number>>;
}

export const SelectEmploymentFaq: React.FC<Props> = ({ select, setSelect }) => {
  const { Data } = ApplicationFAQ_Data();
  const selectFAQ = Data?.find(it => it?.id == select);

  return (
    <>
      <SelectFAQModal style={{border: '1px solid #111'}}>
        <SelectFAQTitle>게시글 확인</SelectFAQTitle>
        <ModalIcon onClick={() => setSelect(0)}><IoClose /></ModalIcon>
        <SelectFAQContent>
          <SelectFAQPart style={{alignItems: 'center'}}>
            <label htmlFor='password'>비밀번호</label>
            <Input id='password' type='password' />
            <button className='submit'>확인</button>
          </SelectFAQPart>
          <SelectFAQPart style={{alignItems: 'center', justifyContent: 'center', border: 'none'}}>
            + 게시물의 수정 / 삭제를 원하시면 비밀번호를 입력하세요.
          </SelectFAQPart>
        </SelectFAQContent>
      </SelectFAQModal>
    </>
  )
}

export default React.memo(SelectEmploymentFaq);