import FilterButtonList from './FilterButtonList';
import MainButton from '@/components/Button/MainButton';
import { FILTER_LIST } from '@/constant';
import { B2Bold } from '@/style/fonts/StyledFonts';
import { FilterListType } from '@/types';
import { useState } from 'react';
import styled from 'styled-components';

const FilterBar = () => {
  const [filterList, setFilterList] = useState<FilterListType[]>(FILTER_LIST);

  return (
    <Container>
      <FilterButtonContainer>
        {filterList.map(filter => (
          <FilterButtonList
            key={filter.title}
            filterList={filterList}
            filterItem={filter}
            setFilterList={setFilterList}
          />
        ))}
      </FilterButtonContainer>
      <MainButton
        $buttonColor="var(--color_sub3)"
        $buttonWidth="112px"
        $buttonHeight="40px"
      >
        <B2Bold $fontColor="white">선택</B2Bold>
      </MainButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 34px;
  padding: 40px 0px;
  margin-bottom: 64px;
`;

const FilterButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
export default FilterBar;
