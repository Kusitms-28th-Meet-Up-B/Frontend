import { useQuery } from 'react-query';
import Axios from '.';

export const ProgramAPI = {
  getProgramDetailInfo: async (programId: number) => {
    const response = await Axios.get(`/programs/program?id=${programId}`);
    return response.data;
  },
  getProgressPrograms: async ({
    filter,
    page,
  }: {
    filter: string | null;
    page: number;
  }) => {
    const SIZE = 5;
    const response = await Axios.get('/manager/progressPrograms', {
      params: {
        programType: filter === '전체' ? null : filter,
        page: page,
        size: SIZE,
      },
    });
    return response.data;
  },
  getFinishPrograms: async ({
    filter,
    page,
  }: {
    filter: string | null;
    page: number;
  }) => {
    const SIZE = 5;
    const response = await Axios.get('/manager/finishPrograms', {
      params: {
        programType: filter === '전체' ? null : filter,
        page: page,
        size: SIZE,
      },
    });
    return response.data;
  },
  deleteProgram: async (id: number) => {
    const response = await Axios.delete(
      `/manager/deleteProgram?programId=${id}`,
    );
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
      onSuccess: data => {
        console.log(data);
      },
      onError: () => {},
    },
  );
};

export const useGetProgressPrograms = ({
  filter,
  page,
}: {
  filter: string | null;
  page: number;
}) => {
  return useQuery(
    ['getProgressPrograms', filter, page],
    () => ProgramAPI.getProgressPrograms({ filter, page }),
    {
      cacheTime: 500000,
      staleTime: 500005,
      onSuccess: () => {},
      onError: () => {},
    },
  );
};

export const useGetFinishPrograms = ({
  filter,
  page,
}: {
  filter: string | null;
  page: number;
}) => {
  return useQuery(
    ['getFinishPrograms', filter, page],
    () => ProgramAPI.getFinishPrograms({ filter, page }),
    {
      cacheTime: 500000,
      staleTime: 500005,
      onSuccess: () => {},
      onError: () => {},
    },
  );
};
