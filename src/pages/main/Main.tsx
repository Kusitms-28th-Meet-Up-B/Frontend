// 메인페이지
import styled from 'styled-components';
import Banner from './Banner';
import PageNav from './PageNav';
import Promotion from './Promotion';
import HotProgram from './HotProgram';

const Main = () => {
  return (
    <Container>
      <Banner />
      <PageNav />
      <Promotion />
      <HotProgram />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 120px;
`;
