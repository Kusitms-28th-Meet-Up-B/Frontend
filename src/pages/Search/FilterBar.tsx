import FilterButton from './FilterButton';
import MainButton from '@/components/Button/MainButton';
import { FILTER_LIST } from '@/constant';
import { B2Bold } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';

const FilterBar = () => {
  return (
    <Container>
      <FilterButtonContainer>
        {FILTER_LIST.map(filter => (
          <FilterButton filter={filter} />
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
