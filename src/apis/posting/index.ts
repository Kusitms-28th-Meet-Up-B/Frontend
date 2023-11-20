import Axios from '..';

export const fetchPostingDetail = (postingType: string, id: number) => () =>
  Axios.get(`/${postingType}/${id}/detail`, {
    params: {
      id,
    },
  });
