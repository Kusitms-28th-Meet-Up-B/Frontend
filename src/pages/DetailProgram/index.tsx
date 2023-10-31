import { CommonInner } from '@/style/common';
import styled from 'styled-components';
import ProgramHead from './ProgramHead';
import ProgramBody from './ProgramBody';
// import RecommendProgram from './RecommendProgram';
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
        <CommonInner>
          <InnerContainer>
            <ProgramHead program={programInfoData.result} />
            <hr />
            <ProgramBody description={programInfoData.description} />
            <hr />
            {/* API 미완성으로 데이터를 넘겨줄 수 없어 주석처리 함 */}
            {/* <RecommendProgram programs={} /> */}
          </InnerContainer>
        </CommonInner>
        <HoneyTipButton />
      </Container>
    );

  return null;
};

const Container = styled.div`
  position: relative;
`;

const InnerContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 130px;
  text-align: center;

  hr {
    background: var(--color_gray300);
    height: 1px;
    border: 0;
  }
`;

export default DetailProgram;
