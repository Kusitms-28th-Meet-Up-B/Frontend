import { FilterListType } from '@/types';
import { useState, useEffect } from 'react';
import { DETAILED_CATEGORY_LIST } from '@/constants/Search';
import FilterButtonItem from './FilterButtonItem';
import FilterItem from './FilterItem';

const FilterButtonList = ({
  filterList,
  filterItem,
  setFilterList,
}: {
  filterList: FilterListType[];
  filterItem: FilterListType;
  setFilterList: (newFilter: FilterListType[]) => void;
}) => {
  const [isOpenFilterItem, setIsOpenFilterItem] = useState<boolean>(false);
  const [currentFilterTitle, setCurrentFilterTitle] = useState<string>(
    filterItem.title,
  );

  useEffect(() => {
    if (
      currentFilterTitle != undefined &&
      filterItem.title === '여행 프로그램'
    ) {
      const detailedCategoryList = DETAILED_CATEGORY_LIST.find(
        list => list.program === currentFilterTitle,
      )?.items;

      detailedCategoryList
        ? setFilterList(
            filterList.map(filter =>
              filter.title === '세부 카테고리'
                ? { ...filter, items: detailedCategoryList }
                : filter,
            ),
          )
        : setFilterList(
            filterList.map(filter =>
              filter.title === '세부 카테고리'
                ? { ...filter, items: [] }
                : filter,
            ),
          );
    }
  }, [currentFilterTitle]);

  return (
    <div>
      <FilterButtonItem
        filterItem={filterItem}
        currentFilterTitle={currentFilterTitle}
        isOpenFilterItem={isOpenFilterItem}
        setIsOpenFilterItem={setIsOpenFilterItem}
      />
      {isOpenFilterItem && !filterItem.calendar && (
        <FilterItem
          filterItem={filterItem}
          currentFilterTitle={currentFilterTitle}
          setCurrentFilterTitle={setCurrentFilterTitle}
        />
      )}
    </div>
  );
};

export default FilterButtonList;
