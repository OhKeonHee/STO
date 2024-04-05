import React, { useState } from 'react'
import { ApplicationContent, ApplicationForm, ApplicationHeader, ApplicationWrapper, FormPart, FormRadios, FormTitle } from '../../organism/Recruit/Apply/styles';
import { Input, Radio, Select, message } from 'antd';
import { FaCaretRight } from 'react-icons/fa';

export const ApplicationEdit = () => {
  const [nation, setNation] = useState('korean');
  const [phone, setPhone] = useState('');
  const [isPhone, setIsPhone] = useState(false);
  const [timer, setTimer] = useState(0);

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

  return (
    <ApplicationWrapper style={{minHeight: 516}}>
      <ApplicationHeader>지원서 수정</ApplicationHeader>
      <ApplicationContent>
        <ApplicationForm style={{marginTop: 0}}>
          <FormTitle>이력서 수정하기</FormTitle>
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
            <button className='findPassword'>비밀번호 찾기</button>
          </FormPart>
          <FormPart>
            <button className='submit'>지원서 수정하기 <FaCaretRight /></button>
          </FormPart>
        </ApplicationForm>
      </ApplicationContent>
    </ApplicationWrapper>
  )
}

export default React.memo(ApplicationEdit);