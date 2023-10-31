import ProgramCard from '@/components/ProgramCard/ProgramCard';
import { H1 } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';

const test = [
  {
    id: 0,
    hashTag: ['태안', '태안군'],
    photoUrl:
      'https://masil.io/_next/image?url=https%3A%2F%2Fmasil-image.s3.ap-northeast-2.amazonaws.com%2F230830-%25E1%2584%2590%25E1%2585%25A2%25E1%2584%258B%25E1%2585%25A1%25E1%2586%25AB-%25E1%2584%2592%25E1%2585%25A1%25E1%2586%25AB%25E1%2584%2583%25E1%2585%25A1%25E1%2586%25AF%25E1%2584%2589%25E1%2585%25A1%25E1%2586%25AF%25E1%2584%258B%25E1%2585%25B5_%25E1%2584%2591%25E1%2585%25A9%25E1%2584%2589%25E1%2585%25B3%25E1%2584%2590%25E1%2585%25A5_v3.png&w=1080&q=75',
    programName: '2023 태안 한달살이',
    remainDay: 'D-1',
    like: 153,
  },
  {
    id: 0,
    hashTag: ['태안', '태안군'],
    photoUrl:
      'https://masil.io/_next/image?url=https%3A%2F%2Fmasil-image.s3.ap-northeast-2.amazonaws.com%2F230830-%25E1%2584%2590%25E1%2585%25A2%25E1%2584%258B%25E1%2585%25A1%25E1%2586%25AB-%25E1%2584%2592%25E1%2585%25A1%25E1%2586%25AB%25E1%2584%2583%25E1%2585%25A1%25E1%2586%25AF%25E1%2584%2589%25E1%2585%25A1%25E1%2586%25AF%25E1%2584%258B%25E1%2585%25B5_%25E1%2584%2591%25E1%2585%25A9%25E1%2584%2589%25E1%2585%25B3%25E1%2584%2590%25E1%2585%25A5_v3.png&w=1080&q=75',
    programName: '2023 태안 한달살이',
    remainDay: 'D-1',
    like: 153,
  },
  {
    id: 0,
    hashTag: ['태안', '태안군'],
    photoUrl:
      'https://masil.io/_next/image?url=https%3A%2F%2Fmasil-image.s3.ap-northeast-2.amazonaws.com%2F230830-%25E1%2584%2590%25E1%2585%25A2%25E1%2584%258B%25E1%2585%25A1%25E1%2586%25AB-%25E1%2584%2592%25E1%2585%25A1%25E1%2586%25AB%25E1%2584%2583%25E1%2585%25A1%25E1%2586%25AF%25E1%2584%2589%25E1%2585%25A1%25E1%2586%25AF%25E1%2584%258B%25E1%2585%25B5_%25E1%2584%2591%25E1%2585%25A9%25E1%2584%2589%25E1%2585%25B3%25E1%2584%2590%25E1%2585%25A5_v3.png&w=1080&q=75',
    programName: '2023 태안 한달살이',
    remainDay: 'D-1',
    like: 153,
  },
  {
    id: 0,
    hashTag: ['태안', '태안군'],
    photoUrl:
      'https://masil.io/_next/image?url=https%3A%2F%2Fmasil-image.s3.ap-northeast-2.amazonaws.com%2F230830-%25E1%2584%2590%25E1%2585%25A2%25E1%2584%258B%25E1%2585%25A1%25E1%2586%25AB-%25E1%2584%2592%25E1%2585%25A1%25E1%2586%25AB%25E1%2584%2583%25E1%2585%25A1%25E1%2586%25AF%25E1%2584%2589%25E1%2585%25A1%25E1%2586%25AF%25E1%2584%258B%25E1%2585%25B5_%25E1%2584%2591%25E1%2585%25A9%25E1%2584%2589%25E1%2585%25B3%25E1%2584%2590%25E1%2585%25A5_v3.png&w=1080&q=75',
    programName: '2023 태안 한달살이',
    remainDay: 'D-1',
    like: 153,
  },
];

const RecommendProgram = () => {
  return (
    <Container>
      <H1 $fontColor="var(--color_gray900)">유사 지원 사업 추천</H1>
      <ProgramCard programList={test} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 65px;
  margin-top: 130px;
  text-align: left;
`;

export default RecommendProgram;
