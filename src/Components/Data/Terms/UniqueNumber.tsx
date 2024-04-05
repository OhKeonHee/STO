import React from "react";
import { TermContent, TermFooter, TermHeader, TermWrapper } from "../../../organism/Recruit/Apply/styles"
import { Checkbox } from "antd";

export const UniqueNumber = () => {
  return (
    <TermWrapper>
      <TermHeader>* 고유식별정보 수집동의</TermHeader>
      <TermContent>
        <p style={{marginBottom: 10}}>주식회사 STO는 「개인정보 보호법」등 관련 법령에 따라 입사전형시 본인 식별 등을 위하여 입사지원자의 고유식별정보를 수집하고 있습니다. 귀하의 고유식별정보 수집 및 이용과 관련하여 아래의 안내 내용을 자세히 읽어 보시고, 모든 내용을 숙지하신 후에 고유식별정보의 수집 및 이용에 관한 동의 여부를 결정해 주시기 바랍니다. </p>
        <p>1. 수집 및 이용하려는 고유식별정보의 항목 및 목적</p>
        <p style={{marginLeft: 13}}>가. 고유식별정보 항목</p>
        <p style={{marginLeft: 13}}> - 휴대폰번호</p>
        <p style={{marginLeft: 13}}>나. 수집/이용하려는 목적</p>
        <p style={{marginLeft: 13}}> - 입사전형시 본인 식별 및 실명 확인</p>
        <p style={{marginLeft: 13, marginBottom: 10}}>- 급여 지급, 복리후생 제공시 본인 식별 및 실명 확인</p>
        <p>2. 개인정보의 보유 및 이용기간</p>
        <p style={{marginLeft: 13}}>가. 채용된 입사지원자의 고유식별정보</p>
        <p style={{marginLeft: 13}}> - 보유기간 : 영구 보유</p>
        <p style={{marginLeft: 13}}> - 보유이유 : 재직 중 인사관리 등, 퇴직 후 복리후생, 경력증명서 발급 등</p>
        <p style={{marginLeft: 13}}>나. 채용되지 아니한 입사지원자의 개인정보</p>
        <p style={{marginLeft: 13}}> - 보유기간 : 채용절차 종료 후 2년</p>
        <p style={{marginLeft: 13, marginBottom: 10}}> - 보유이유 : 향후 채용 가능 자원의 관리</p>
        <p>3. 동의를 거부할 권리에 대한 안내</p>
        <p style={{marginLeft: 13}}>귀하는 본 안내에 따른 고유식별정보 수집 및 이용에 관한 동의를 거부하실 권리가 있습니다. </p>
        <p style={{marginLeft: 13}}>다만, 귀하가 위 고유식별정보의 수집 및 이용에 관한 동의를 거부하시는 경우에는 귀하에 대한 입사전형의 </p>
        <p style={{marginLeft: 13}}>진행이 불가능하다는 점을 유념하시기 바랍니다.</p>
      </TermContent>
      <TermFooter>
        <Checkbox id="unique" />
        <label htmlFor="unique">위 약관에 동의합니다.</label>
      </TermFooter>
    </TermWrapper>
  )
}

export default React.memo(UniqueNumber);