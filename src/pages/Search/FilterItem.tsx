import { B3 } from '@/style/fonts/StyledFonts';
import { FilterListType } from '@/types';
import styled from 'styled-components';

interface FilterItemProps {
  filterItem: FilterListType;
  currentFilterTitle: string;
  setCurrentFilterTitle: (title: string) => void;
}
const FilterItem = ({
  filterItem,
  currentFilterTitle,
  setCurrentFilterTitle,
}: FilterItemProps) => {
  return (
    <Container>
      {filterItem.items.map(item => (
        <div
          key={item}
          className="filter-item"
          onClick={() => setCurrentFilterTitle(item)}
        >
          <B3
            $fontColor={
              currentFilterTitle === item ? 'black' : 'var(--color_gray500)'
            }
          >
            {item}
          </B3>
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  padding: 3px 0px;
  text-align: left;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);

  .filter-item {
    margin: 18px 21px;
    cursor: pointer;
  }
`;

export default FilterItem;
