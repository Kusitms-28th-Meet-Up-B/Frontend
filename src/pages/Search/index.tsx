import { CommonInner } from '@/style/common';
import styled from 'styled-components';
import MapButton from './MapButton';
import SearchResult from './SearchResult';
import FilterBar from './FilterBar';
import { useState } from 'react';
import { FilterInputType } from '@/types';
import { DEFUALT_FILTER_LIST } from '@/constants/Search';
import ProgramSearchBar from './ProgramSearchBar';

const Search = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [filterInput, setFilterInput] =
    useState<FilterInputType>(DEFUALT_FILTER_LIST);

  // TODO : 검색 API 연결
  return (
    <CommonInner>
      <Container>
        <ProgramSearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <FilterBar filterInput={filterInput} setFilterInput={setFilterInput} />
        <SearchResult keyword="검색어" programCount={0} programList={[]} />
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
