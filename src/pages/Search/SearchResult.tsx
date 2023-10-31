import ProgramCard from '@/components/ProgramCard/ProgramCard';
import { H1 } from '@/style/fonts/StyledFonts';
import { ProgramMainInfoType } from '@/types';
import styled from 'styled-components';

interface SearchResultProps {
  keyword: string;
  programCount: number;
  programList: ProgramMainInfoType[];
}

const SearchResult = ({
  keyword,
  programCount,
  programList,
}: SearchResultProps) => {
  return (
    <>
      <ResultHeader>
        <H1 $fontColor="var(--color_gray900)">{`'${keyword}' 여행 프로그램`}</H1>
        <H1 $fontColor="var(--color_sub3)">{` ${programCount}`}</H1>
        <H1 $fontColor="var(--color_gray900)">{`건`}</H1>
      </ResultHeader>
      <ProgramCard programList={programList} />
    </>
  );
};

const ResultHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 184px;
  margin-bottom: 65px;
`;
export default SearchResult;
