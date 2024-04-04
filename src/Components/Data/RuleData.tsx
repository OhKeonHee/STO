import React from 'react'

export const RuleData = () => {
  const Data = [
    {
      title: '제 1 장 총 칙',
      article: [
        {
          title: '제 1 조 [목  적]',
          content: (
            <div>
              <p>
                이 규정은 「자본시장과 금융투자업에 관한 법률」 (이하 "법" 이라 한다) 및 제반 법규에 따른 신속ㆍ정확한 공시 및
                <br /> 임원ㆍ직원의 내부자거래방지를 위하여 회사 내부 정보의 종합관리 및 적절한 공개 등에 관한 사항을 정함을 목적으로 한다.
              </p>
            </div>
          )
        },
        {
          title: '제 2 조 [적용범위]',
          content: '공시, 내부자거래 및 내부정보관리에 관한 사항은 관련 법규 또는 정관에 정한 것을 제외하고는 이 규정에 따른다.'
        },
        {
          title: '제 3 조 [용어의 정의]',
          content: (
            <>
              <div style={{lineHeight: 1.5}}>
                <p>1. 이 규정에서 “내부정보”라 함은 한국거래소(이하"거래소"라 한다)의 코스닥시장 공시규정(이하 “공시규정”</p>
                <p style={{ marginLeft: 13 }}>이라 한다) 제1편에 의한 공시의무사항과 그 밖에 회사의 경영 또는 재산상황이나 투자자의 투자판단에 영향을</p>
                <p style={{ marginLeft: 13 }}>미칠 수 있는 사항을 말한다.</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>2. 이 규정에서 “공시책임자”라 함은 공시규정 제2조제4항에 따라 회사를 대표하여 신고업무를 수행할 수 있는 </p>
                <p style={{ marginLeft: 13 }}>자를 말한다.</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>3. 이 규정에서 “임원”이라 함은 이사(『상법』제401조의2제1항 각 호의 어느 하나에 해당하는 자를 포함한다) 및</p>
                <p style={{ marginLeft: 13 }}>감사를 말한다.</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>4. 제1항부터 제3항 이외에 이 규정에서 사용하는 용어의 정의에 관하여는 관련 법령과 규정에서 사용하는 용어의 </p>
                <p style={{ marginLeft: 13 }}>정의에 의한다.</p>
              </div>
            </>
            
          )
        },
      ],
    },
    {
      title: '제 2 장  내부정보의 관리',
      article: [
        {
          title: '제 4 조 [내부정보의 관리]',
          content: (
            <>
              <div style={{lineHeight: 1.5}}>
                <p>1. 임원 • 직원은 업무상 알게 된 회사의 내부정보를 엄중히 관리하여야 하고, 업무상 필요한 경우를 제외하고는 </p>
                <p style={{ marginLeft: 13 }}>내부정보를 사내 또는 사외에 유출하여서는 아니 된다.</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>2. 대표이사는 내부정보 및 그와 관련된 문서 등의 보관, 전달, 파기 등에 관한 구체적인 기준을 정하는 등 </p>
                <p style={{ marginLeft: 13 }}>내부정보관리를 위해 필요한 조치를 취하여야 한다.</p>
              </div>
            </>
            
          )
        },
        {
          title: '제 5 조 [공시책임자]',
          content: (
            <>
              <div style={{lineHeight: 1.5}}>
                <p>1. 대표이사는 공시책임자를 정하여 이를 한국거래소에 신고하여야 한다. 공시책임자를 변경한 때에도 또한 같다.</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>2. 공시책임자는 내부정보관리제도의 수립 및 운영에 관련된 업무를 총괄하며 다음 각 호의 업무를 수행한다.</p>
                <p style={{ marginLeft: 13 }}>1) 공시의 집행</p>
                <p style={{ marginLeft: 13 }}>2) 내부정보관리제도의 운영 상황 점검 및 평가</p>
                <p style={{ marginLeft: 13 }}>3) 내부정보에 대한 검토 및 공시 여부의 결정</p>
                <p style={{ marginLeft: 13 }}>4) 임원▪직원에 대한 교육 등 내부정보관리제도의 운영을 위해 필요한 조치</p>
                <p style={{ marginLeft: 13 }}>5) 내부정보의 관리를 담당하거나 공시업무를 담당하는 부서 또는 임원,직원에 대한 지휘 및 감독</p>
                <p style={{ marginLeft: 13 }}> 6) 그 밖에 내부정보관리제도의 운영을 위해 필요하다고 대표이사가 인정한 업무</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>3. 공시책임자는 그 직무를 수행함에 있어서 다음 각 호의 권한을 가진다.</p>
                <p style={{ marginLeft: 13 }}>1) 내부정보와 관련된 각종 서류 및 기록의 제출을 요구하고 열람할 수 있는 권한</p>
                <p style={{ marginLeft: 13 }}>2) 회계 또는 감사업무를 담당하는 부서, 그 밖에 내부정보의 생성과 관련이 있는 업무를 담당하는 </p>
                <p style={{ marginLeft: 26 }}>부서의 임원 • 직원으로부터 필요한 의견을 청취할 수 있는 권한</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>4. 공시책임자는 그 직무를 수행함에 있어 필요한 경우 관련 업무를 담당하는 임원과 협의할 수 있으며, </p>
                <p style={{ marginLeft: 13 }}>회사의 비용으로 전문가의 조력을 구할 수 있다.</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>5. 공시책임자는 내부정보관리제도의 운영 상황을 정기적으로 대표이사에게 (또는 이사회에) 보고하여야 한다.</p>
              </div>
            </>
          )
        },
        {
          title: '제 6 조 [공시담당자]',
          content: (
            <>
              <div style={{lineHeight: 1.5}}>
                <p>1. 대표이사는 공시담당자를 정하여 한국거래소에 신고하여야 한다. 공시담당자를 변경한 때에도 또한 같다.</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>2. 공시담당자는 내부정보관리와 관련하여 공시책임자의 지휘를 받으며 다음 각 호의 업무를 수행한다.</p>
                <p style={{ marginLeft: 13 }}>1) 내부정보의 수집과 검토 및 공시책임자에 대한 보고</p>
                <p style={{ marginLeft: 13 }}>2) 공시의 집행을 위해 필요한 업무</p>
                <p style={{ marginLeft: 13 }}>3) 공시 관련 법규의 변경 등 내부정보의 관리를 위해 필요한 사항의 확인 및 공시책임자에 대한 보고</p>
                <p style={{ marginLeft: 13 }}>4) 공시사항 세부내역표의 작성 및 관리</p>
                <p style={{ marginLeft: 13 }}>5) 그 밖에 대표이사 또는 공시책임자가 필요하다고 인정한 사항</p>
              </div>
            </>
            
          )
        },
        {
          title: '제 7 조 [내부정보의 집중]',
          content: (
            <>
              <div style={{lineHeight: 1.5}}>
                <p>1. 임원 및 각 부서의 장은 다음 각 호의 어느 하나에 해당하는 경우에 적시에 공시책임자에게 그에 관한 </p>
                <p style={{ marginLeft: 13 }}>정보를 제공하여야 한다.</p>
                <p style={{ marginLeft: 13 }}>1) 내부정보가 발생하거나 발생이 예상되는 경우</p>
                <p style={{ marginLeft: 13 }}>2) 내부정보 중 이미 공시된 사항을 취소 또는 변경해야 할 사유가 발생하거나 발생이 예상되는 경우</p>
                <p style={{ marginLeft: 13 }}>3) 그 밖에 공시책임자의 요구가 있는 경우</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>2. 공시 책임자 및 대표이사는 제1항에 따른 내부정보의 적시제공을 위해 회사 내의 정보전달 체계를 </p>
                <p style={{ marginLeft: 13 }}>효율적으로 구축하여야 하며, 필요한 경우 공시의무사항과 관련된 업무의 결재과정에 공시책임자의 </p>
                <p style={{ marginLeft: 13 }}>협조를 받도록 할 수 있다.</p>
              </div>
            </>
            
          )
        },
        {
          title: '제 7 조의 2 [최대주주 관련 정보의 관리]',
          content: (
            <>
              <div style={{lineHeight: 1.5}}>
                <p>
                  공시책임자는 최대주주와 관련된 공시의무사항 및 조회공시 요구사항에 대한 공시업무를 원활히 수행하기 
                  <br />위하여 최대주주에게 관련 사실을 충분히 설명하고 해당 정보를 적시에 전달받을 수 있도록 정보전달 체계를
                  <br />구축하여야 한다.
                </p>
              </div>
            </>
            
          )
        },
        {
          title: '제 7 조의 3 [종속회사 내부정보의 집중]',
          content: (
            <>
              <div style={{lineHeight: 1.5}}>
                <p>1. 회사는 공시의무사항과 관련한 내부정보가 종속회사에서 발생하거나 발생이 예상되는 경우 종속회사로 </p>
                <p style={{ marginLeft: 13 }}>하여금 그 내용을 회사의 공시책임자 또는 공시담당자에게 즉시 통지하도록 하여야 한다.</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>2. 회사는 제1항에 따른 공시의무사항과 관련된 내부정보를 효율적으로 관리하기 위하여 종속회사에 </p>
                <p style={{ marginLeft: 13 }}>공시관련 정보를 관리하는 자를 두도록 하며, 이를 지정하거나 변경하는 경우 회사의 공시책임자 또는</p>
                <p style={{ marginLeft: 13 }}>공시담당자에게 즉시 통보하도록 하여야 한다.</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>3. 회사는 종속회사에게 공시업무에 필요한 범위에서 관련 자료의 제출을 요구할 수 있다.</p>
              </div>
            </>
            
          )
        },
        {
          title: '제 8 조 [내부정보의 사외제공]',
          content: (
            <>
              <div style={{lineHeight: 1.5}}>
                <p>1. 임원 • 직원이 업무상의 이유로 회사의 거래상대방․외부감사인․대리인, 회사와 법률자문, 경영자문 등의 </p>
                <p style={{ marginLeft: 13 }}>자문계약을 체결하고 있는 자 등에 대하여 불가피하게 내부정보를 제공해야 하는 경우 공시책임자에게 이에 </p>
                <p style={{ marginLeft: 13 }}>관한 사항을 보고하여야 한다.</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>2. 제1항의 경우 공시책임자는 관련 내부정보의 비밀유지에 관한 계약을 체결하는 등 필요한 조치를 취하여야 </p>
                <p style={{ marginLeft: 13 }}>한다.</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>3. 제1항에 따라 내부정보를 제공함에 있어 공정공시의무가 발생하는 경우에는 이를 지체없이 공시하여야 한다.</p>
              </div>
            </>
            
          )
        },
      ],
    },
    {
      title: '제 3 장 내부정보의 공개',
      article: [
        {
          title: '제 9 조 [공시의 종류] 회사의 공시는 다음과 같이 구분한다.',
          content: (
            <>
              <div style={{lineHeight: 1.5}}>
                <p>
                  1. 공시규정 제1편 제2장 제1절에 따른 주요경영사항 신고 및 공시<br />
                  2. 공시규정 제1편 제2장 제2절에 따른 조회공시<br />
                  3. 공시규정 제1편 제2장 제3절에 따른 공정공시<br />
                  4. 공시규정 제1편 제3장에 따른 자율공시<br />
                  5. 법 제3편 제1장에 따른 증권신고서 등의 제출<br />
                  6. 법 제159조, 제160조 및 제165조와 공시규정 제1편 제2장 제4절에 따른 사업보고서 등의 제출<br />
                  7. 법 제161조에 따른 주요사항보고서의 제출<br />
                  8. 그 밖에 다른 법규에 따른 공시
                </p>
              </div>
            </>
          )
        },
        {
          title: '제 9 조의 2 [공시대상의 확인]',
          content: (
            <>
              <div style={{lineHeight: 1.5}}>
                <p>
                  이 규정에 따라 공정공시를 포함한 공시의무사항 해당 여부를 판단함에 있어서 공시규정 제6조제1항제4호에 의한 <br />
                  주가 또는 투자판단에 중대한 영향을 미치거나 미칠 수 있는 사항도 포함되도록 주의하여야 한다.
                </p>
              </div>
            </>
          )
        },
        {
          title: '제 10 조 [공시의 실행]',
          content: (
            <>
              <div style={{lineHeight: 1.5}}>
                <p>1. 공시담당자는 제9조에 정한 공시사항이 발생한 경우 필요한 내용을 작성하고 필요한 서류 등을 갖추어</p>
                <p style={{ marginLeft: 13 }}>공시책임자에게 보고하여야 한다.</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>2. 공시책임자는 제1항의 내용과 서류 등이 관련법규에 위반되지 않는지의 여부를</p>
                <p style={{ marginLeft: 13 }}>검토하여 이를 대표이사에게 보고한 후 공시하여야 한다.</p>
              </div>
            </>
            
          )
        },
        {
          title: '제 10 조의 2 [공시의 신속한 이행]',
          content: (
            <>
              <div style={{lineHeight: 1.5}}>
                <p>
                  공시책임자는 제9조에 따른 공시사항이 발생한 경우 공시규정에 따른 공시시한 전이라도 해당 내부정보가 <br />
                  적시에 공시될 수 있도록 최선의 노력을 다하여야 한다.
                </p>
              </div>
            </>
            
          )
        },
        {
          title: '제 11 조 [공시 후의 사후조치]',
          content: (
            <>
              <div style={{lineHeight: 1.5}}>
                <p>
                  공시책임자와 공시담당자는 공시한 내용에 오류나 누락이 있거나 취소 또는 변경하고자하는 경우 지체 없이 
                  <br />공시규정 제 30조에 따라 정정공시하는 등 이를 시정하기 위한 조치를 취하여야 한다.
                </p>
              </div>
            </>
            
          )
        },
        {
          title: '제 12 조 [언론사의 취재 등]',
          content: (
            <>
              <div style={{lineHeight: 1.5}}>
                <p>1. 언론사 등으로부터 회사에 대한 취재요청이 있는 경우 원칙적으로 대표이사 또는 공시책임자가 이에 응한다. </p>
                <p style={{ marginLeft: 13 }}>필요한 경우 관련 부서의 임원 • 직원이 취재에 응하게 할 수 있다.</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>2. 회사가 언론사 등에 보도자료를 배포하고자 하는 경우 공시책임자와 협의하여야 한다. 공시책임자는 필요한 경우 </p>
                <p style={{ marginLeft: 13 }}>대표이사에게 보도자료의 배포와 관련된 사항을 보고하여야 한다.</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>3. 공시책임자는 제 2 항에 따라 배포하는 보도자료의 내용이 공정공시 대상에 해당하는 경우에는</p>
                <p style={{ marginLeft: 13 }}>보도자료 배포 전까지 공시하여야 한다.</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>4. 언론의 보도내용이 사실과 다르다는 것을 알게 된 임원 • 직원은 이를 공시책임자에게 보고하여야 한다.</p>
                <p style={{ marginLeft: 13 }}>공시책임자는 관련 사항을 대표이사에게 보고하고 필요한 조치를 취하여야 한다.</p>
              </div>
            </>
            
          )
        },
        {
          title: '제 12 조의 2 [보도내용의 확인]',
          content: (
            <>
              <div style={{lineHeight: 1.5}}>
                <p>
                  공시책임자, 공시담당자 및 내부정보 발생 부서는 언론사 등의 회사 관련 보도내용을 일상적으로 확인하여<br />
                  사실과 다른 내용이 있는 경우 이를 시정하기 위한 조치를 취하여야 한다.
                </p>
              </div>
            </>
            
          )
        },
        {
          title: '제 13 조 [기업설명회]',
          content: (
            <>
              <div style={{lineHeight: 1.5}}>
                <p>1. 대표이사는 IR활동이 코스닥시장상장법인의 경영책무임을 인식하고, 자발적▪지속적으로 기업설명회를 개최하여 </p>
                <p style={{ marginLeft: 13 }}>투자관계자와 신뢰를 구축하기 위해 노력하여야 한다.</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>2. 회사의 경영내용, 사업계획 및 전망 등에 대한 기업설명회는 공시책임자와 협의하여 개최하여야 한다.</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>3. 공시책임자 또는 공시담당자는 기업설명회의 일시, 장소, 설명회 내용 등을 개최 전일까지 공시하고, 관련 자료를 </p>
                <p style={{ marginLeft: 13 }}>설명회 개최 전까지 거래소 공시제출시스템에 게재하여야 한다.</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>4. 회사의 모든 임원▪직원은 기업설명회 과정에서 공정공시 대상정보 중 사전에 공시되지 않은 사항이 공개되지 </p>
                <p style={{ marginLeft: 13 }}>않도록 주의하여야 한다.</p>
              </div>
            </>
            
          )
        },
        {
          title: '제 13 조의 2[풍문]',
          content: (
            <>
              <div style={{lineHeight: 1.5}}>
                <p>1. 공시책임자는 시장에 풍문이 유포되어 있는 경우 관련 사업부서에 대한 의견조회 등을 통해 풍문 내용의 사실 </p>
                <p style={{ marginLeft: 13 }}>여부 및 내부정보에 해당하는지 여부 등을 확인하여야 한다.</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>2. 제1항에 따른 확인 결과 당해 풍문이 공시규정에 따른 공시의무사항에 해당하는 경우 관련 정보를 공시하여야 </p>
                <p style={{ marginLeft: 13 }}>한다.</p>
              </div>
            </>
            
          )
        },
        {
          title: '제 13 조의 3[정보제공 요구]',
          content: (
            <>
              <div style={{lineHeight: 1.5}}>
                <p>1. 주주 및 이해관계자 등으로부터 회사와 관련한 정보공개를 요구받은 경우 공시책임자는 당해 요구의 적법성 </p>
                <p style={{ marginLeft: 13 }}>등을 검토하여 관련 정보를 제공할 것인지 여부를 결정하여야 한다.</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>2. 공시책임자는 정보의 제공 여부를 결정하기 위하여 제공을 요구받은 정보가 투자자의 투자판단 및 주가에 </p>
                <p style={{ marginLeft: 13 }}>영향을 미칠 수 있는지 여부에 대하여 법무 담당 부서 또는 외부 법률전문가 등의 의견을 청취할 수 있다.</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>3. 제1항의 결정에 따라 정보를 제공하는 경우에는 제12조제3항을 준용한다.</p>
              </div>
            </>
          )
        },
      ],
    },
    {
      title: '제 4 장 내부자 거래 등에 대한 규제',
      article: [
        {
          title: '제 14 조 [단기매매차익의 반환]',
          content: (
            <>
              <div style={{lineHeight: 1.5}}>
                <p>1. 임원과 법 제172조제1항 및 법 시행령 제194조가 정하는 직원은 법 제172조 제1항의 특정증권등</p>
                <p style={{ marginLeft: 13 }}>(이하“특정증권등”이라 한다)을 매수한 후 6개월 이내에 매도하거나 특정증권등을 매도한 후 6개월 이내에 </p>
                <p style={{ marginLeft: 13 }}>매수하여 이익을 얻은 경우에 그 이익(이하 “단기매매차익”이라 한다)을 회사에 반환하여야 한다.</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>2. 회사의 주주(주권 외의 지분증권 또는 증권예탁증권을 소유한 자를 포함한다. 이하 이 조에서 같다)가 회사에 </p>
                <p style={{ marginLeft: 13 }}>대하여 제1항에 따른 단기매매차익을 얻은 자에게 단기매매차익의 반환청구를 하도록 요구한 경우 회사는 그 </p>
                <p style={{ marginLeft: 13 }}>요구를 받은 날부터 2개월 이내에 필요한 조치를 취하여야 한다.</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>3. 증권선물위원회가 제1항에 따른 단기매매차익의 발생사실을 회사에 통보한 경우 공시책임자는 지체 없이 다음 </p>
                <p style={{ marginLeft: 13 }}>각 호의 사항을 회사의 인터넷 홈페이지에 공시하여야 한다.</p>
                <p style={{ marginLeft: 13 }}>1) 단기매매차익을 반환해야 할 자의 지위</p>
                <p style={{ marginLeft: 13 }}>2) 단기매매차익 금액</p>
                <p style={{ marginLeft: 13 }}>3) 증권선물위원회로부터 단기매매차익 발생사실을 통보받은 날</p>
                <p style={{ marginLeft: 13 }}>4) 단기매매차익 반환 청구 계획</p>
                <p style={{ marginLeft: 13 }}>5) 회사의 주주가 회사로 하여금 단기매매차익을 얻은 자에게 단기매매차익의 반환청구를 하도록 요구할 수 </p>
                <p style={{ marginLeft: 26 }}>있으며, 회사가 요구를 받은 날부터 2개월 이내에 그 청구를 하지 아니하는 경우에는 그 주주는 회사를 </p>
                <p style={{ marginLeft: 26 }}>대위(代位)하여 청구를 할 수 있다는 뜻</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>4. 제3항의 공시기간은 증권선물위원회로부터 단기매매차익 발생 사실을 통보받은 날 부터 2년간 또는</p>
                <p style={{ marginLeft: 13 }}>단기매매차익을 반환받은 날 중 먼저 도래하는 날까지로 한다.</p>
              </div>
            </>
            
          )
        },
        {
          title: '제 15 조 [특정증권등의 매매 등에 대한 통보]',
          content: (
            <>
              <div style={{lineHeight: 1.5}}>
                <p>
                  임원과 법 제172조제1항 및 법 시행령제194조가 정하는 직원은 특정증권등의 매매, 그 밖의 거래를 하는 경우 <br />
                  그 사실을 공시책임자에게 통보하여야 한다. 다만, 한국거래소 상장법인 임직원 내부자거래 알림서비스(K-ITAS)를<br />
                  통하여 회사에 통보된 매매내역에 대 하여는 이를 공시책임자에게 통보한 것으로 본다.
                </p>
              </div>
            </>
          )
        },
        {
          title: '제16조 [미공개중요정보의 이용행위 금지]',
          content: (
            <>
              <div style={{lineHeight: 1.5}}>
                <p>
                  임원 • 직원은 법 제174조제1항이 정하는미공개중요정보(계열회사의 미공개중요정보를 포함한다)를 특정증권등의<br />
                  매매, 그 밖의 거래에 이용하거나 타인에게 이용하게 해서는 아니 된다.
                </p>
              </div>
            </>
          )
        },
      ],
    },
    {
      title: '제 5 장  보 칙',
      article: [
        {
          title: '제 17 조 [교육]',
          content: (
            <>
              <div style={{lineHeight: 1.5}}>
                <p>1. 공시책임자와 공시담당자는 공시규정 제36조 및 제44조제5항에 따른 공시업무에 관한 교육 등을 이수하여야 </p>
                <p style={{ marginLeft: 13 }}>하고, 공시책임자는 교육내용을 관련 임원▪직원에게 알려야 한다.</p>
              </div>
              <div style={{lineHeight: 1.5}}>
                <p>2. 대표이사는 임원▪직원에게 제14조부터 제1조까지의 사항 및 기타 법이 정하는 내부자거래 등을 예방하기 </p>
                <p style={{ marginLeft: 13 }}>위한 교육의 실시 등 충분한 노력을 하여야 한다.</p>
              </div>
            </>
            
          )
        },
        {
          title: '제 18 조 [규정의 개폐]',
          content: (
            <>
              <div style={{lineHeight: 1.5}}>
                <p>이 규정의 개정 또는 폐지는 대표이사가 한다.</p>
              </div>
            </>
          )
        },
        {
          title: '제 19 조 [규정의 공표]',
          content: (
            <>
              <div style={{lineHeight: 1.5}}>
                <p>이 규정은 회사의 홈페이지에 공표한다. 규정을 개정한 때에도 또한 같다.</p>
              </div>
            </>
          )
        },
        {
          title: '부  칙',
          content: (
            <>
              <div style={{textAlign: 'center'}}>
                <p>이 규정은 2009년 9월 1일부터 시행한다</p>
              </div>
            </>
          )
        },
        {
          title: '부  칙',
          content: (
            <>
              <div style={{textAlign: 'center'}}>
                <p>이 규정은 2017년 5월 26일부터 시행한다</p>
              </div>
            </>
          )
        },
        {
          title: '부  칙',
          content: (
            <>
              <div style={{textAlign: 'center'}}>
                <p>이 규정은 2017년 9월 11일부터 시행한다</p>
              </div>
            </>
          )
        },
        {
          title: '부  칙',
          content: (
            <>
              <div style={{textAlign: 'center'}}>
                <p>이 규정은 2023년 1월 1일부터 시행한다</p>
              </div>
            </>
          )
        },
      ],
    },
  ];
  return { Data }
}
