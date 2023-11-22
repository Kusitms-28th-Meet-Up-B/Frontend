import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { B3 } from '@/style/fonts/StyledFonts';

interface Props {
  prevId: number; // 이전 글의 id
  nextId: number; // 다음 글의 id
  id: number; // 현재 글의 id
}

const PostingNav: React.FC<Props> = ({ prevId, nextId, id }) => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const route = currentPath.split('/')[1];
  const isUserPosting = window.location.pathname.includes('user');

  const handleNavigate = (id: number): void => {
    navigate(`/${route}/${id}`);
  };
  const navToList = (): void => {
    if (isUserPosting) navigate('/user/posting');
    else navigate(`/${route}`);
  };

  return (
    <Container>
      {!isUserPosting && (
        <>
          {id !== prevId && (
            <Button
              buttoncolor="#E3E7ED"
              onClick={() => handleNavigate(prevId)}
            >
              <HiOutlineChevronLeft color="#53575C" />
              <B3 $fontColor="#53575C">이전글</B3>
            </Button>
          )}
          {id !== nextId && (
            <Button
              buttoncolor="#E3E7ED"
              onClick={() => handleNavigate(nextId)}
            >
              <B3 $fontColor="#53575C">다음글</B3>
              <HiOutlineChevronRight color="#53575C" />
            </Button>
          )}
        </>
      )}
      <Button
        buttoncolor="#FF7D2C"
        style={{ marginLeft: '16px' }}
        onClick={navToList}
      >
        <GiHamburgerMenu style={{ color: '#fff' }} />
        <B3 $fontColor="#fff">목록</B3>
      </Button>
    </Container>
  );
};

export default PostingNav;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  gap: 24px;
`;

const Button = styled.div<{ buttoncolor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 140px;
  padding: 12px 40px;
  gap: 4px;

  border-radius: 40px;
  background: ${({ buttoncolor }) => buttoncolor};

  cursor: pointer;
`;
