import Axios from '..';

export const fetchPostingDetail = (postingType: string, id: number) => () =>
  Axios.get(`/${postingType}/detail`, {
    params: {
      [`${postingType === 'reviews' ? 'review' : 'archive'}Id`]: id,
    },
  });
