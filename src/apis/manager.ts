import { useQuery } from 'react-query';
import Axios from '.';

export const ManagerAPI = {
  getFindTempProgram: async () => {
    const response = await Axios.get('/manager/findTemp');
    return response.data.result;
  },
  deleteTempProgram: async () => {
    const response = await Axios.get('/manager/findTemp');
    return response;
  },
};

export const useFindTempProgram = () => {
  return useQuery(
    'getProgramTempProgram',
    () => ManagerAPI.getFindTempProgram(),
    {
      cacheTime: 500000,
      staleTime: 500005,
      onSuccess: () => {},
      onError: () => {},
    },
  );
};
