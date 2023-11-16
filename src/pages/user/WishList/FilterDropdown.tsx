import { B3 } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';

interface FilterDropdownProps {
  filterItemTitle: string;
  filterItemInput: string;
  dropdownList: string[];
  handleChangeFilterInput: (itemTitle: string, itemInput: string) => void;
}

const FilterDropdown = ({
  filterItemTitle,
  filterItemInput,
  dropdownList,
  handleChangeFilterInput,
}: FilterDropdownProps) => {
  return (
    <Container>
      {dropdownList.map(item => (
        <div
          key={item}
          className="filter-item"
          onClick={() => {
            handleChangeFilterInput(filterItemTitle, item);
          }}
        >
          <B3
            $fontColor={
              filterItemInput === item ? 'black' : 'var(--color_gray500)'
            }
            $hoverColor="black"
          >
            {item}
          </B3>
        </div>
      ))}
    </Container>
  );
};

export default FilterDropdown;

const Container = styled.div`
  background-color: white;
  padding: 3px 0px;
  margin-top: 12px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);

  .filter-item {
    margin: 18px 21px;
    cursor: pointer;
  }
`;
