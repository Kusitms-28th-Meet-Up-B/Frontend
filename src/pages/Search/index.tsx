import { CommonInner } from '@/style/common';
import styled from 'styled-components';
import MapButton from './MapButton';
import SearchResult from './SearchResult';
import FilterBar from './FilterBar';
import { useEffect, useState } from 'react';
import { FilterInputType } from '@/types';
import { DEFUALT_FILTER_LIST } from '@/constants/Search';
import ProgramSearchBar from './ProgramSearchBar';
import { useParams, useSearchParams } from 'react-router-dom';

const Search = () => {
  const { type } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState<string>('');
  const [filterInput, setFilterInput] =
    useState<FilterInputType>(DEFUALT_FILTER_LIST);

  useEffect(() => {
    const programKeyword = searchParams.get('keyword');

    if (type === 'program' && programKeyword) {
      setFilterInput({
        ...filterInput,
        program: programKeyword,
      });
    } else if (type === 'search' && programKeyword) {
      setSearchInput(programKeyword);
    }
  }, []);

  // TODO : 검색 API 연결 (useParams의 type 이용)
  // useParams의 type 종류 => program(카드로 이동한 경우) / search(검색어로 이동한 경우)
  // useSearchParams를 이용해서 검색어 및 키워드 보여줄 예정 (ex. /search/program?keyword=여행지원사업)
  // useSearchParams에서는 keyword는 필수. sort, location, program, 등등은 필요 시 들어갈 예정
  // handleSubmit 구현해서 SearchBar의 handleSubmit, 선택 버튼 onClick에 적용할 예정

  return (
    <CommonInner>
      <Container>
        <ProgramSearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <FilterBar filterInput={filterInput} setFilterInput={setFilterInput} />
        <SearchResult
          type={type}
          keyword={searchInput}
          filter={filterInput}
          programCount={0}
          programList={[]}
        />
        <MapButton />
      </Container>
    </CommonInner>
  );
};

const Container = styled.div`
  text-align: center;
  margin-top: 180px;
  margin-bottom: 80px;
`;

export default Search;
