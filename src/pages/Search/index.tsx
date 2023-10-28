import { CommonInner } from '@/style/common';
import styled from 'styled-components';
import MapButton from './MapButton';
import SearchResult from './SearchResult';
import FilterBar from './FilterBar';

const Search = () => {
  return (
    <CommonInner>
      <Container>
        <FilterBar />
        <SearchResult />
        <MapButton />
      </Container>
    </CommonInner>
  );
};

const Container = styled.div`
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  //align-items: center;
  text-align: center;
  //background-color: pink;
  margin-top: 180px;
  margin-bottom: 80px;
`;

export default Search;
