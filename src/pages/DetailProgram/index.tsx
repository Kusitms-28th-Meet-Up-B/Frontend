import { CommonInner } from '@/style/common';
import styled from 'styled-components';
import ProgramHead from './ProgramHead';
import ProgramBody from './ProgramBody';
import RecommendProgram from './RecommendProgram';
import HoneyTipButton from './HoneyTipButton';
import { useParams } from 'react-router-dom';
import { useGetProgramDetailInfo } from '@/apis/program';

const DetailProgram = () => {
  const { _programId } = useParams();
  const programId = Number(_programId);
  const { data: programInfoData } = useGetProgramDetailInfo(
    programId ? programId : -1,
  );

  if (programInfoData)
    return (
      <Container>
        <Background />
        <CommonInner>
          <InnerContainer>
            <ProgramHead program={programInfoData.result} />
            <hr />
            <ProgramBody description={programInfoData.description} />
            <hr />
            <RecommendProgram programs={[]} />
          </InnerContainer>
        </CommonInner>
        <HoneyTipButton />
      </Container>
    );

  return null;
};

export default DetailProgram;

const Container = styled.div`
  position: relative;
`;

const InnerContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 130px;
  text-align: center;

  hr {
    background: var(--color_gray300);
    height: 1px;
    border: 0;
  }
`;

const Background = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  height: 800px;
  position: absolute;
  margin-top: 80px;
`;
