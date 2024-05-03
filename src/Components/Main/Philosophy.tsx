import React, { useEffect, useState } from 'react'
import { PhilosophyContent, PhilosophyContentTxtArea, PhilosophyLogo, PhilosophySubTitle, PhilosophyTitle, PhilosophyTxt, PhilosophyWrapper } from '../../organism/Main/styles';
import Philosophy_Logo from '../../Assets/imgs/Main/Philosophy.jpg'

export const Philosophy = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <PhilosophyWrapper>
      <PhilosophyTitle>Philosophy</PhilosophyTitle>
      <PhilosophySubTitle>We make smart consumer & Better your life</PhilosophySubTitle>
      <PhilosophyTxt>"우리는 사람들에게 경제적 부가가치를 제공하고, 멋진 라이프 스타일에 대한 감성을 충족시켜 주기 위하여 존재합니다."</PhilosophyTxt>
      <PhilosophyContent>
        <PhilosophyLogo src={Philosophy_Logo} />
        <PhilosophyContentTxtArea className='diversity'>
          <span>다양성</span>
          <h1 className='vertical'></h1>
          <p>
            진솔하게 대화하고 조언하라<br />
            차이를 뛰어넘어 진실을 보기위하여 노력하라<br />
            만남을 통하여 함께 성장하라
          </p>
        </PhilosophyContentTxtArea>
        <PhilosophyContentTxtArea className='dedication'>
          <span>헌신</span>
          <h1 className='vertical'></h1>
          <p>
            당신이 먼저 웃고 고객을 즐겁게 바꿔라<br />
            정당한 방법을 제시하고 고객이 선택하게 하라<br />
            고객의 생각을 바로 실행하라
          </p>
        </PhilosophyContentTxtArea>
        <PhilosophyContentTxtArea className='autonomy'>
          {width >= 700 ? (
            <>
              <p>
                항상 자신의 마음을 돌아보고 살펴라<br />
                나부터 시작해라<br />
                스스로 배움을 통하여 성장하라
              </p>
              <h1 className='vertical'></h1>
              <span>자율성</span>
            </>
          ) : (
            <>
              <span>자율성</span>
              <h1 className='vertical'></h1>
              <p>
                항상 자신의 마음을 돌아보고 살펴라<br />
                나부터 시작해라<br />
                스스로 배움을 통하여 성장하라
              </p>
            </>
          )}
        </PhilosophyContentTxtArea>
      </PhilosophyContent>
    </PhilosophyWrapper>
  )
}

export default React.memo(Philosophy);