import styled from 'styled-components';
import AdminProfile from './AdminProfile';
import ProgramBox from './ProgramBox';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '@/recoil/LoginAtom';
import { useState } from 'react';
import { DASHBOARD_FILTER } from '@/constants/Admin';

const DATA = [
  {
    id: 1,
    title: '태안 2023 태안 한달살이',
    views: 200,
    wish: 20,
    start: '2023.10.13',
    end: '2023.10.13',
  },
  {
    id: 2,
    title: '태안 2023 태안 한달살이',
    views: 200,
    wish: 20,
    start: '2023.10.13',
    end: '2023.10.13',
  },
  {
    id: 3,
    title: '태안 2023 태안 한달살이',
    views: 200,
    wish: 20,
    start: '2023.10.13',
    end: '2023.10.13',
  },
  {
    id: 4,
    title: '태안 2023 태안 한달살이',
    views: 200,
    wish: 20,
    start: '2023.10.13',
    end: '2023.10.13',
  },
  {
    id: 5,
    title: '태안 2023 태안 한달살이',
    views: 200,
    wish: 20,
    start: '2023.10.13',
    end: '2023.10.13',
  },
];

const DashBoard = () => {
  const userData = useRecoilValue(UserAtom);
  const [progressPage, setProgressPage] = useState(1);
  const [finishedPage, setFinishedPage] = useState(1);
  const [selectedProgressFilter, setSelectedProgessFilter] = useState(
    DASHBOARD_FILTER[0],
  );
  const [selectedFinishedFilter, setSelectedFinishedFilter] = useState(
    DASHBOARD_FILTER[0],
  );

  return (
    <Container>
      <Title>공고 목록</Title>
      <InnerContainer>
        <AdminProfile
          image={userData.imageUrl === null ? '' : userData.imageUrl}
          organization={userData.nickName}
          email={userData.email}
        />
        <ProgramContainer>
          <ProgramBox
            title="진행중인 공고"
            noDataText="아직 등록된 공고가 없습니다!"
            programList={DATA}
            page={progressPage}
            setPage={setProgressPage}
            filter={selectedProgressFilter}
            setFilter={setSelectedProgessFilter}
          />
          <ProgramBox
            title="마감된 공고"
            noDataText="아직 마감된 공고가 없습니다!"
            programList={[]}
            page={finishedPage}
            setPage={setFinishedPage}
            filter={selectedFinishedFilter}
            setFilter={setSelectedFinishedFilter}
          />
        </ProgramContainer>
      </InnerContainer>
    </Container>
  );
};

export default DashBoard;

const Container = styled.div`
  width: 1800px;
  margin: 0 auto;
  padding: 0px 20px 80px 20px;
  top: 80px;
  position: relative;
  background-color: var(--color_background);

  body:not(&) {
    background-color: var(--color_background);
  }
`;

const Title = styled.div`
  color: var(--color_gray900);
  font-family: SUIT-Bold;
  font-size: 28px;
  font-style: normal;
  line-height: 150%; /* 42px */
  text-align: center;
  margin-top: 68px;
  margin-bottom: 48px;
  background-color: inherit;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProgramContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
