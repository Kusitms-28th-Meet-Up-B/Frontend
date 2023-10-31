import SearchBar from '@/components/SearchBar/SearchBar';
import styled from 'styled-components';

interface ProgramSearchBarProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const ProgramSearchBar = ({
  searchInput,
  setSearchInput,
}: ProgramSearchBarProps) => {
  return (
    <Container>
      <SearchBar
        placeHolder="어디로 떠나고 싶으신건가요?"
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleClick={() => {
          // TODO: API 연동
          setSearchInput('');
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 900px;
  height: 80px;
  margin: 0 auto;
`;

export default ProgramSearchBar;
