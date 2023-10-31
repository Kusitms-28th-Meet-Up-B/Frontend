import { CommonInner } from '@/style/common';
import styled from 'styled-components';
import MapButton from './MapButton';
import SearchResult from './SearchResult';
import FilterBar from './FilterBar';
import SearchBar from '@/components/SearchBar/SearchBar';
import { useState } from 'react';
import { FilterInputType } from '@/types';
import { DEFUALT_FILTER_LIST } from '@/constants/Search';

const Search = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [filterInput, setFilterInput] =
    useState<FilterInputType>(DEFUALT_FILTER_LIST);

  return (
    <CommonInner>
      <Container>
        <SearchWrapper>
          <SearchBar
            placeHolder="어디로 떠나고 싶으신건가요?"
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            handleClick={() => {
              // TODO: API 연동
              setSearchInput('');
            }}
          />
        </SearchWrapper>
        <FilterBar filterInput={filterInput} setFilterInput={setFilterInput} />
        <SearchResult />
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

const SearchWrapper = styled.div`
  display: flex;
  width: 900px;
  height: 80px;
  margin: 0 auto;
`;

export default Search;
