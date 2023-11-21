import { useQuery } from 'react-query';
import Axios from '.';

export const ProgramAPI = {
  getProgramDetailInfo: async (programId: number) => {
    const response = await Axios.get(`/programs/program?id=${programId}`);
    return response.data;
  },
  getProgressPrograms: async ({
    programType,
    page,
  }: {
    programType: string | null;
    page: number;
  }) => {
    const SIZE = 5;
    const response = await Axios.get('/manager/progressPrograms', {
      params: {
        programType: programType,
        page: page,
        size: SIZE,
      },
    });
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

export const useGetProgressPrograms = ({
  programType,
  page,
}: {
  programType: string | null;
  page: number;
}) => {
  return useQuery(
    'getProgressPrograms',
    () => ProgramAPI.getProgressPrograms({ programType, page }),
    {
      onSuccess: () => {},
      onError: () => {},
    },
  );
};
