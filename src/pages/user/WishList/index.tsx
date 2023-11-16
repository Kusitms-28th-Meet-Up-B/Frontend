import { DEFAULT_WISHLIST_FILTER_LIST } from '@/constants/User/wishlist';
import { CommonInner } from '@/style/common';
import { WishlistFilterType } from '@/types';
import { useState } from 'react';
import FilterBar from './FilterBar';
import UserTitle from '@/components/Title/UserTitle';
import styled from 'styled-components';
import ProgramCard from '@/components/ProgramCard/ProgramCard';
import axios from 'axios';

const WishList = () => {
  const [filterInput, setFilterInput] = useState<WishlistFilterType>(
    DEFAULT_WISHLIST_FILTER_LIST,
  );
  const [data, setData] = useState(null);

  const handleSubmit = () => {
    // TODO: 데이터 다시 GET */
    console.log(filterInput);

    // UI 확인을 위해 임시로 넣은 API
    axios
      .get('http://52.78.13.36/programs/recent')
      .then(response => {
        console.log(response.data.result);
        setData(response.data.result);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleChangeFilterInput = (itemTitle: string, itemInput: string) => {
    setFilterInput({ ...filterInput, [itemTitle]: itemInput });
  };

  return (
    <CommonInner>
      <Container>
        <UserTitle>갈래 말래</UserTitle>
        <FilterBar
          filterInput={filterInput}
          handleChangeFilterInput={handleChangeFilterInput}
          handleSubmit={handleSubmit}
        />
        {data && <ProgramCard programList={data} />}
      </Container>
    </CommonInner>
  );
};
export default WishList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 120px;
  margin-bottom: 180px;
`;
