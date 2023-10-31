import { FilterListType, Value } from '@/types';
import { useState, useEffect, useRef } from 'react';
import { DETAILED_CATEGORY_LIST } from '@/constants/Search';
import FilterButtonItem from './FilterButtonItem';
import FilterItem from './FilterItem';
import { CustomCalendar } from './CustomCalendar';

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
  const filterRef = useRef<HTMLDivElement>(null);

  const [date, setDate] = useState<Value>([new Date(), new Date()]);

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

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current?.contains(e.target as HTMLDivElement)
      ) {
        setIsOpenFilterItem(false);
      }
    };
    document.addEventListener('mousedown', handleClose);
    return () => {
      document.removeEventListener('mousedown', handleClose);
    };
  }, [isOpenFilterItem]);

  return (
    <div style={{ height: 'min-content' }} ref={filterRef}>
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
      {isOpenFilterItem && filterItem.calendar && (
        <CustomCalendar date={date} setDate={setDate} />
      )}
    </div>
  );
};

export default FilterButtonList;
