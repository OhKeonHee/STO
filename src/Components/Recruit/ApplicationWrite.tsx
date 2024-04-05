import React, { useEffect, useState } from 'react'
import { ApplicationCaution, ApplicationContent, ApplicationForm, ApplicationHeader, ApplicationWrapper, FormPart, FormRadios, FormTitle, Terms } from '../../organism/Recruit/Apply/styles';
import PersonalProtection from '../Data/Terms/PersonalProtection';
import UniqueNumber from '../Data/Terms/UniqueNumber';
import { Input, Radio, Select, message } from 'antd';
import { FaCaretRight } from "react-icons/fa";

export const ApplicationWrite = () => {
  const [nation, setNation] = useState('korean');
  const [phone, setPhone] = useState('');
  const [isPhone, setIsPhone] = useState(false);
  const [timer, setTimer] = useState(180);

  const handleClickPhone = () => {
    if (phone == '') {
      message.error('핸드폰 번호를 입력해주세요.');
    } else if (phone?.slice(0, 2) !== '01') {
      message.error('올바르지 않은 핸드폰 번호 형식입니다.');
    } else if (phone?.length!== 11) {
      message.error('올바르지 않은 핸드폰 번호 형식입니다.');
    } else {
      message.success('인증번호 전송 완료');
      setIsPhone(true);
      setTimer(180);
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      } else {
        clearInterval(intervalId);
        message.error('인증번호 입력 시간이 초과되었습니다.');
        setIsPhone(false);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  return (
    <ApplicationWrapper>
      <ApplicationHeader>지원서 작성</ApplicationHeader>
      <ApplicationContent>
        <ApplicationCaution>
          <span>작성시 주의사항을 안내해 드리오니, 반드시 확인하시고 작성하시기 바랍니다.</span>
          <p>"최종제출하기"를 클릭하신 후에는 지원서 수정이 불가능합니다.</p>
          <p>최종제출 이전에는 "지원서 수정"란을 통해 모든 단계의 내용을 수정할 수 있습니다.</p>
        </ApplicationCaution>
        <Terms>
          <PersonalProtection />
          <UniqueNumber />
        </Terms>
      </ApplicationContent>
      <ApplicationForm>
        <FormTitle>온라인 입사지원</FormTitle>
        <FormPart>
          <label htmlFor='type'>채용구분</label>
          <Select id='type'></Select>
        </FormPart>
        <FormPart>
          <label htmlFor='name'>이름</label>
          <Input id='name' placeholder='이름을 입력해주세요.' />
          <FormRadios>
            <div>
              <Radio id='korean' value='korean' onChange={(e) => setNation(e.target.value)} checked={nation == 'korean'} />
              <label htmlFor='korean'>내국인</label>
            </div>
            <div>
              <Radio id='foreign' value='foreign' onChange={(e) => setNation(e.target.value)} checked={nation == 'foreign'} />
              <label htmlFor='foreign'>외국인</label>
            </div>
          </FormRadios>
        </FormPart>
        <FormPart>
          <label htmlFor='phone'>핸드폰 인증</label>
          <Input id='phone' placeholder='휴대폰 번호 - 없이 입력' value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button onClick={handleClickPhone}>인증하기</button>
        </FormPart>
        {isPhone && (
          <FormPart style={{alignItems: 'flex-start'}}>
            <label htmlFor='number'>
              인증번호<br />
              <span style={{width: 30}}>{Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}</span>
            </label>
            <Input id='number' placeholder='인증번호 입력' />
            {timer !== 0 && <button>인증확인</button>}
            <button className='re'>인증번호 재발송</button>
          </FormPart>
        )}
        <FormPart>
          <label htmlFor='password'>비밀번호</label>
          <Input type='password' id='password' placeholder='비밀번호를 입력해주세요.' />
          <span>공백없이 영문 / 숫자조합 6-12자리</span>
        </FormPart>
        <FormPart>
          <button className='submit'>지원서 작성하기 <FaCaretRight /></button>
        </FormPart>
      </ApplicationForm>
    </ApplicationWrapper>
  )
}

export default React.memo(ApplicationWrite);