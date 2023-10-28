import TravelProgramList from '@/components/TravelProgram/TravelProgramList';
import { CommonInner } from '@/style/common';
import { H1 } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';

const SearchResult = () => {
  return (
    <>
      <ResultHeader>
        <H1 $fontColor="var(--color_gray900)">{`'충청남도' 여행 프로그램`}</H1>
        <H1 $fontColor="var(--color_sub3)">{` 150`}</H1>
        <H1 $fontColor="var(--color_gray900)">{`건`}</H1>
      </ResultHeader>
      <TravelProgramList />
    </>
  );
};

const ResultHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 65px;
`;
export default SearchResult;
