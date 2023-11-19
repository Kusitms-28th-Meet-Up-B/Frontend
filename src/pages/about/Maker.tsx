import { CommonInner } from '@/style/common';
import MakerImage from '@/assets/about/maker.png';
import styled from 'styled-components';

const Maker = () => {
  return (
    <CommonInner>
      <Container>
        <TitleContainer>
          <Title>갈래와 함께하는 사람들</Title>
          <Description>
            <div className="description">
              <span className="highlight">여행에 진심인 8명</span>
              <span>이 한 팀에 모였습니다.</span>
            </div>
            <Line />
          </Description>
        </TitleContainer>
        <img alt="갈래와 함께하는 사람들" src={MakerImage} />
      </Container>
    </CommonInner>
  );
};

export default Maker;

const Container = styled.div`
  margin-top: 119px;
  margin-bottom: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 881px;
    height: 1460px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 151px;
`;

const Title = styled.div`
  color: var(--gray-900, #15191d);
  font-family: Recipekorea;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 54px */
`;

const Description = styled.div`
  position: relative;
  color: var(--grey-900, #15191d);
  font-family: SUIT-ExtraBold;
  font-size: 28px;
  font-style: normal;
  line-height: 150%; /* 42px */

  .description {
    width: max-content;
    position: absolute;
    top: 14px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1;

    .highlight {
      color: var(--color_sub1);
    }
  }
`;

const Line = styled.div`
  background-color: #b1d8ff;
  width: 210px;
  height: 8px;
  position: absolute;
  top: 42px;
  left: -40px;
`;
