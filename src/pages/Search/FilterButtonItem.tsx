import styled from 'styled-components';
import CalendarIcon from '@/assets/icons/calendar_icon.svg';
import { HiOutlineChevronDown } from 'react-icons/hi2';
import { B3 } from '@/style/fonts/StyledFonts';
import { FilterListType } from '@/types';

interface FilterButtonStyle {
  $buttonSize: 'small' | 'medium' | 'large';
}

interface FilterButtonItemProps {
  filterItem: FilterListType;
  currentFilterTitle: string;
  isOpenFilterItem: boolean;
  setIsOpenFilterItem: (isOpen: boolean) => void;
}

const FilterButtonItem = ({
  filterItem,
  currentFilterTitle,
  isOpenFilterItem,
  setIsOpenFilterItem,
}: FilterButtonItemProps) => {
  return (
    <Container
      $buttonSize={filterItem.buttonSize}
      onClick={() => setIsOpenFilterItem(!isOpenFilterItem)}
    >
      <B3 $fontColor="var(--color_gray600)">{currentFilterTitle}</B3>
      {filterItem.calendar ? (
        <img alt="calendar-icon" src={CalendarIcon} />
      ) : (
        <HiOutlineChevronDown color="#666B6F" size="20px" />
      )}
    </Container>
  );
};

const Container = styled.div<FilterButtonStyle>`
  background-color: var(--color_background);
  display: flex;
  justify-content: space-between;
  padding: 9px 16px;
  align-items: center;
  border-radius: 40px;

  width: ${({ $buttonSize }) => $buttonSize === 'small' && '120px'};
  width: ${({ $buttonSize }) => $buttonSize === 'medium' && '200px'};
  width: ${({ $buttonSize }) => $buttonSize === 'large' && '220px'};
`;

export default FilterButtonItem;
