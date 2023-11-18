import { useNavigate } from 'react-router-dom';

export const handleClickSearchProgram = (
  searchInput: string,
  setSearchInput: React.Dispatch<React.SetStateAction<string>>,
) => {
  // 검색 후 페이지 이동
  const navigate = useNavigate();
  navigate(`/search?keyword=${searchInput}`);
  setSearchInput('');
};
