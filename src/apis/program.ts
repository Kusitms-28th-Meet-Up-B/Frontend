import { useQuery } from 'react-query';
import Axios from '.';

interface Test {
  [key: string]: string | number | undefined;
  programName?: string;
  orderCriteria?: string;
  location?: string;
  programType?: string;
  detailType?: string;
  recruitStartDate?: string;
  recruitEndDate?: string;
  activeStartDate?: string;
  activeEndDate?: string;
  size?: number;
}

export const ProgramAPI = {
  getProgramDetailInfo: async (programId: number) => {
    const response = await Axios.get(`/programs/program?id=${programId}`);
    return response.data;
  },
  getSearchProgram: async (apiData: Test | null) => {
    const response = await Axios.get(`/programs/filters`, { params: apiData });
    return response.data.result.programs;
  },
};

export const useGetProgramDetailInfo = (programId: number) => {
  return useQuery(
    'getProgramDetailInfo',
    () => ProgramAPI.getProgramDetailInfo(programId),
    {
      onSuccess: () => {},
      onError: () => {},
    },
  );
};

export const useGetSearchProgram = (apiData: Test | null) => {
  return useQuery(
    ['getSearchProgram', apiData],
    () => ProgramAPI.getSearchProgram(apiData),
    {
      enabled: false,
      cacheTime: 500000,
      staleTime: 500005,
      onSuccess: () => {},
      onError: () => {},
    },
  );
};
