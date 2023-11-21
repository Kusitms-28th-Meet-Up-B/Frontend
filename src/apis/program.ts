import { useQuery } from 'react-query';
import Axios from '.';

export const ProgramAPI = {
  getProgramDetailInfo: async (programId: number) => {
    const response = await Axios.get(`/programs/program?id=${programId}`);
    return response.data;
  },
  getSimilarRecommend: async (programId: number) => {
    const response = await Axios.get(
      `/programs/similarRecommend?id=${programId}`,
    );
    return response.data.result;
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

export const useGetSimilarRecommend = (programId: number) => {
  return useQuery(
    ['getSimilarRecommend', programId],
    () => ProgramAPI.getSimilarRecommend(programId),
    {
      cacheTime: 500000,
      staleTime: 500005,
      onSuccess: data => {
        console.log(data);
      },
      onError: () => {},
    },
  );
};
