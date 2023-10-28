import styled from 'styled-components';
import CalendarIcon from '@/assets/icons/calendar_icon.svg';
import { HiOutlineChevronDown } from 'react-icons/hi2';
import { B3 } from '@/style/fonts/StyledFonts';
import { FilterListType } from '@/types';

interface ButtonStyle {
  $buttonSize: 'small' | 'medium' | 'large';
}

/* interface ButtonProps extends ButtonStyle {
  $calendar: boolean;
  children: React.ReactNode;
} */
const FilterButton = ({ filter }: { filter: FilterListType }) => {
  return (
    <ButtonContainer $buttonSize={filter.buttonSize}>
      <B3 $fontColor="var(--color_gray600)">{filter.title}</B3>
      {filter.calendar ? (
        <img alt="calendar-icon" src={CalendarIcon} />
      ) : (
        <HiOutlineChevronDown color="#666B6F" size="20px" />
      )}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div<ButtonStyle>`
  background-color: var(--color_background);
  display: flex;
  justify-content: space-between;
  padding: 0px 16px;
  align-items: center;
  border-radius: 40px;

  width: ${({ $buttonSize }) => $buttonSize === 'small' && '120px'};
  width: ${({ $buttonSize }) => $buttonSize === 'medium' && '200px'};
  width: ${({ $buttonSize }) => $buttonSize === 'large' && '220px'};
`;

export default FilterButton;
