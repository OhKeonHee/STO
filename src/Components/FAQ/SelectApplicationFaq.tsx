import React, { Dispatch, SetStateAction } from 'react'
import { Blacked } from '../NavBar/styles';
import { ModalIcon, SelectFAQContent, SelectFAQModal, SelectFAQPart, SelectFAQTitle } from '../../organism/Recruit/FAQ/styles';
import { ApplicationFAQ_Data } from '../Data/FAQ/ApplicationFAQ_Data';
import { IoClose } from "react-icons/io5";

interface Props {
  select: number;
  setSelect: Dispatch<SetStateAction<number>>;
}

export const SelectApplicationFaq: React.FC<Props> = ({ select, setSelect }) => {
  const { Data } = ApplicationFAQ_Data();
  const selectFAQ = Data?.find(it => it?.id == select);

  return (
    <>
      <Blacked style={{zIndex: 7}} />
      <SelectFAQModal>
        <SelectFAQTitle>입사지원 FAQ</SelectFAQTitle>
        <ModalIcon onClick={() => setSelect(0)}><IoClose /></ModalIcon>
        <SelectFAQContent>
          <SelectFAQPart>
            <label>질문</label>
            <span style={{color: '#4096ff'}}>Q. {selectFAQ?.question}</span>
          </SelectFAQPart>
          <SelectFAQPart>
            <label>답변</label>
            <span>{selectFAQ?.answer}</span>
          </SelectFAQPart>
        </SelectFAQContent>
      </SelectFAQModal>
    </>
  )
}

export default React.memo(SelectApplicationFaq);