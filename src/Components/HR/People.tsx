import React from 'react'
import { HRPart, HRParts, HRPeopleImg, HRPeopleImgWrapper, HRPeopleTxt, HRSubTitle, HRTitle } from '../../organism/HR/styles';
import autonomy from '../../Assets/imgs/HR/autonomy.png'
import diversity from '../../Assets/imgs/HR/diversity.png'
import dedication from '../../Assets/imgs/HR/dedication.png'

export const People = () => {
  return (
    <>
      <HRTitle>People</HRTitle>
      <HRSubTitle>STO는 라이프 스타일러를 꿈꾸는 창의적인 인재와 동행합니다.</HRSubTitle>
      <HRParts>
        <HRPart className='autonomy'>
          <HRPeopleImgWrapper>
            <HRPeopleImg src={autonomy} />
            자율성
          </HRPeopleImgWrapper>
          <HRPeopleTxt>
            <p>
              <span>우리는 다른 사람이 정해 놓은 길이 아닌 자신의 신념에 따라 판단하고 행동합니다.</span><br />
              스스로의 신념에 비추어<br />
              당당한 길을 가기 위해<br />
              먼저 자신의 마음을 성찰합니다.
            </p>
            <p>
              <span>우리는 변화의 시작이 "나"로부터 비롯된다는 것을 알고 있습니다.</span><br />
              주변환경을 탓하기보다,<br />
              상황을 개선하고 변화를 이끌어내기 위해<br />
              나부터 먼저 시작합니다.
            </p>
            <p>
              <span>우리는 다양한 경험을 하기 위해 스스로 노력하며,</span><br />
              <span>그 속에서 새로운 것을 배우고 성장합니다.</span>
            </p>
          </HRPeopleTxt>
        </HRPart>
        <HRPart className='diversity'>
          <HRPeopleImgWrapper>
            <HRPeopleImg src={diversity} />
            다양성
          </HRPeopleImgWrapper>
          <HRPeopleTxt>
            <p>
              <span>우리는 서로를 이해하기 위해 솔직하게 대화하고,</span><br />
              <span>새로운 가치를 만들어가기 위해 진심을 다해 서로에게 조언합니다.</span>
            </p>
            <p>
              <span>우리는 상대방이 잘못된 것이 아니라 "나와 다르다"는 것을 인정합니다.</span><br />
              서로 간의 차이 속에서<br />
              나와 다른 상대방의 진심을 이해하기 위해 서로의 의견을 경청합니다.
            </p>
            <p>
              <span>우리는 다양한 만남 속에서</span><br />
              <span>각자의 장점을 발견하여 그것을 발전시킬 수 있도록 도와주고,</span><br />
              <span>단점은 서로 보완해주며 더불어 성장합니다.</span>
            </p>
          </HRPeopleTxt>
        </HRPart>
        <HRPart className='dedication'>
          <HRPeopleImgWrapper className='dedication'>
            <HRPeopleImg src={dedication} />
            헌신
          </HRPeopleImgWrapper>
          <HRPeopleTxt>
            <p>
              <span>우리는 남을 즐겁게 하려면 먼저 나 스스로 즐거워야 한다는 것을 알고 있습니다.</span><br />
              스스로 즐거움을 찾기 위해 노력하고,<br />
              언제나 밝고 환한 미소로 타인을 대합니다.
            </p>
            <p>
              <span>우리는 고객에게 만족을 줄 수 있는 다양한 방법들을 고민합니다.</span><br />
              이 중 올바른 방법들을 제시하고<br />
              고객이 가장 만족할 수 있는 선택을 스스로 할 수 있게 합니다.
            </p>
            <p>
              <span>우리는 고객의 생각을 그 즉시 행동으로 옮깁니다.</span><br />
              모든 노력과 행동이 가장 큰 성과를 볼 수 있는 시기는<br />
              고객이 그것을 필요로 하는, 바로 지금입니다.
            </p>
          </HRPeopleTxt>
        </HRPart>
      </HRParts>
      
    </>
  )
}

export default React.memo(People);