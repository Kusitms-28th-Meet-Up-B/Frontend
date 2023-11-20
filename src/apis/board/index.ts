import Axios from '..';

export const fetchBoardData =
  (boardType: string, filter: string, page: number, size: number) => () =>
    Axios.get(`/${boardType}/category`, {
      params: {
        category: filter === '전체' ? null : filter,
        page: page - 1,
        size,
      },
    });
