import { useQuery } from 'react-query';
import Axios from '.';

export const ProgramAPI = {
  getProgramDetailInfo: async (programId: number) => {
    const response = await Axios.get(`/programs/program?id=${programId}`);
    return response.data;
  },
  getSearchProgram: async () => {
    const response = await Axios.get(`/programs/filters`);
    return response.data;
  },
};

export const useGetProgramDetailInfo = (programId: number) => {
  return useQuery(
    'getProgramDetailInfo',
    () => ProgramAPI.getProgramDetailInfo(programId),
    {
      cacheTime: 500000,
      staleTime: 500005,
      onSuccess: () => {},
      onError: () => {},
    },
  );
};

export const useGetSearchProgram = () => {
  return useQuery('getSearchProgram', () => ProgramAPI.getSearchProgram(), {
    cacheTime: 500000,
    staleTime: 500005,
    onSuccess: () => {},
    onError: () => {},
  });
};
