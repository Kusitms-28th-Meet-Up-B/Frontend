import ProgramBoxWrapper from './ProgramBoxWrapper';
import ProgramTable from './ProgramTable';
import { useEffect } from 'react';

interface ProgramBoxProps {
  title: string;
  noDataText: string;
  programList: {
    id: number;
    title: string;
    views: number;
    wish: number;
    start: string;
    end: string;
  }[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  filter: string;
  setFilter: (filter: string) => void;
}

const ProgramBox = ({
  title,
  noDataText,
  programList,
  page,
  setPage,
  filter,
  setFilter,
}: ProgramBoxProps) => {
  useEffect(() => {
    // TODO: 다시 GET
  }, [filter, page]);

  return (
    <ProgramBoxWrapper
      title={title}
      selectedFilter={filter}
      setSelectedFilter={setFilter}
      page={page}
      setPage={setPage}
    >
      <ProgramTable noDataText={noDataText} programList={programList} />
    </ProgramBoxWrapper>
  );
};

export default ProgramBox;
