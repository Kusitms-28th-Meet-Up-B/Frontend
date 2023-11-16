import { WishlistFilterType } from '@/types';
import { useState, useEffect, useRef } from 'react';
import FilterItemButton from './FilterItemButton';
import FilterDropdown from './FilterDropdown';

interface FilterItemProps {
  filterItemTitle: string;
  filterItem: {
    title: string;
    itemList: string[];
    buttonWidth: number;
  };
  filterInput: WishlistFilterType;
  handleChangeFilterInput: (itemTitle: string, itemInput: string) => void;
}

const FilterItem = ({
  filterItemTitle,
  filterItem,
  filterInput,
  handleChangeFilterInput,
}: FilterItemProps) => {
  const filterRef = useRef<HTMLDivElement>(null);
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current?.contains(e.target as HTMLDivElement)
      ) {
        setIsOpenDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClose);
    return () => {
      document.removeEventListener('mousedown', handleClose);
    };
  }, [isOpenDropdown]);

  return (
    <div style={{ height: 'min-content' }} ref={filterRef}>
      <FilterItemButton
        filterItemTitle={filterItem.title}
        filterItemInput={filterInput[filterItemTitle]}
        buttonWidth={filterItem.buttonWidth}
        isOpenDropdown={isOpenDropdown}
        setIsOpenDropdown={setIsOpenDropdown}
      />
      {isOpenDropdown && (
        <FilterDropdown
          filterItemInput={filterInput[filterItemTitle]}
          dropdownList={filterItem.itemList}
          filterItemTitle={filterItemTitle}
          handleChangeFilterInput={handleChangeFilterInput}
        />
      )}
    </div>
  );
};

export default FilterItem;
