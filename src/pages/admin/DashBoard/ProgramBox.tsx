import { DASHBOARD_FILTER } from '@/constants/Admin';
import ProgramBoxWrapper from './ProgramBoxWrapper';
import ProgramTable from './ProgramTable';
import { useState, useEffect } from 'react';

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
}

const ProgramBox = ({ title, noDataText, programList }: ProgramBoxProps) => {
  const [selectedFilter, setSelectedFilter] = useState(DASHBOARD_FILTER[0]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // TODO: 다시 GET
  }, [selectedFilter, page]);

  return (
    <ProgramBoxWrapper
      title={title}
      selectedFilter={selectedFilter}
      setSelectedFilter={setSelectedFilter}
      page={page}
      setPage={setPage}
    >
      <ProgramTable noDataText={noDataText} programList={programList} />
    </ProgramBoxWrapper>
  );
};

export default ProgramBox;
