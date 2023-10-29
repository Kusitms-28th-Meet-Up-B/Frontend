import { B1, H0, H1 } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';
import ProgramCard from './components/ProgramCard';

interface ProgramsDataType {
  imageSrc: string;
  remain: number;
  title: string;
  tags: string[];
  like: number;
}
// 추후에 서버에서 불러와야 할 데이터
const ProgramsData: ProgramsDataType[] = [
  {
    imageSrc: '/src/assets/temp/hot-program1.svg',
    remain: 1,
    title: '태안 한달살이',
    tags: ['태안', '태안군', '지원사업', '한달살이'],
    like: 153,
  },
  {
    imageSrc: '/src/assets/temp/hot-program2.svg',
    remain: 1,
    title: '태안 한달살이',
    tags: ['태안', '태안군', '지원사업', '한달살이'],
    like: 153,
  },
  {
    imageSrc: '/src/assets/temp/hot-program3.svg',
    remain: 1,
    title: '태안 한달살이',
    tags: ['태안', '태안군', '지원사업', '한달살이'],
    like: 153,
  },
  {
    imageSrc: '/src/assets/temp/hot-program3.svg',
    remain: 1,
    title: '태안 한달살이',
    tags: ['태안', '태안군', '지원사업', '한달살이'],
    like: 153,
  },
];

const HotProgram = () => {
  return (
    <Container>
      <TextContainer>
        <H1 $fontColor="#F6505A">HOT</H1>
        <FlexContainer>
          <H0 $fontColor="#15191D">지금 가장 인기있는</H0>
          <H0 $fontColor="#15191D">프로그램</H0>
        </FlexContainer>
        <FlexContainer>
          <B1 $fontColor="#666B6F">많은 사람들이 관심을 가지고 있어요.</B1>
          <B1 $fontColor="#666B6F">마감이 되기 전에 지원해보세요!</B1>
        </FlexContainer>
      </TextContainer>
      <ProgramCardContainer>
        {ProgramsData.map((props, index) => (
          <ProgramCard {...props} key={index} />
        ))}
      </ProgramCardContainer>
    </Container>
  );
};

export default HotProgram;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 360px 260px;
  width: 100%;
`;

const TextContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 24px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ProgramCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 800px;
  gap: 16px;

  overflow-x: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
