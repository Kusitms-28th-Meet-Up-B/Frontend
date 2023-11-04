import { CommonInner } from '@/style/common';
import styled from 'styled-components';
import MapButton from './MapButton';
import SearchResult from './SearchResult';
import FilterBar from './FilterBar';
import { useEffect, useState } from 'react';
import { FilterInputType } from '@/types';
import { DEFUALT_FILTER_LIST } from '@/constants/Search';
import ProgramSearchBar from './ProgramSearchBar';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState<string>('');
  const [filterInput, setFilterInput] =
    useState<FilterInputType>(DEFUALT_FILTER_LIST);
  const navigate = useNavigate();

  useEffect(() => {
    const keyword = searchParams.get('keyword');
    if (keyword) setSearchInput(keyword);

    let newFilterInput = filterInput;
    for (const key in newFilterInput) {
      newFilterInput[key] = searchParams.get(key);
    }

    setFilterInput(newFilterInput);

    // TODO : Search API로 GET ()
    // 검색어는 keyword로 필터는 newFilterInput으로
  }, []);

  const handleSubmit = () => {
    let searchPath = '';
    for (const key in filterInput) {
      if (filterInput[key]) searchPath += `&${key}=${filterInput[key]}`;
    }
    navigate(`/search?keyword=${searchInput}${searchPath}`);
    // TODO: 데이터 다시 GET
  };

  return (
    <CommonInner>
      <Container>
        <ProgramSearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleSubmit={handleSubmit}
        />
        <FilterBar
          filterInput={filterInput}
          setFilterInput={setFilterInput}
          handleSubmit={handleSubmit}
        />
        <SearchResult
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
