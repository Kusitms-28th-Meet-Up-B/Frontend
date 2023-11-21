import { CommonInner } from '@/style/common';
import styled from 'styled-components';
import ProgramHead from './ProgramHead';
import ProgramBody from './ProgramBody';
import RecommendProgram from './RecommendProgram';
import HoneyTipButton from './HoneyTipButton';
import { useParams } from 'react-router-dom';
import {
  useGetProgramDetailInfo,
  useGetRegionLodgment,
  useGetRegionTour,
  useGetSimilarRecommend,
} from '@/apis/program';
import RecommendSpot from './RecommendSpot';
import RecommendAccom from './RecommendAccom';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '@/recoil/LoginAtom';
import RoundedButton from '@/components/Button/RoundedButton';
import { B1Bold } from '@/style/fonts/StyledFonts';

const DetailProgram = () => {
  const { _programId } = useParams();
  const programId = Number(_programId);
  const { data: programInfoData } = useGetProgramDetailInfo(
    programId ? programId : -1,
  );
  const { data: recommendProgram } = useGetSimilarRecommend(
    programId ? programId : -1,
  );
  const { data: recommendSpotList } = useGetRegionTour(
    programId ? programId : -1,
  );
  const { data: recommendAccomList } = useGetRegionLodgment(
    programId ? programId : -1,
  );
  const userInfo = useRecoilValue(UserAtom);

  if (programInfoData)
    return (
      <Container>
        <Background />
        <CommonInner>
          <InnerContainer>
            <ProgramHead program={programInfoData.result} />
            <hr />
            <ProgramBody description={programInfoData.result.description} />
            <hr />
            {(userInfo.id !== programInfoData.writerId || userInfo.id < 0) && (
              <RecommendProgram
                programs={
                  recommendProgram && recommendProgram.length > 0
                    ? recommendProgram
                    : []
                }
              />
            )}
          </InnerContainer>
        </CommonInner>
        {(userInfo.id !== programInfoData.writerId || userInfo.id < 0) && (
          <div>
            <BackgroundLine />
            <CommonInner>
              {recommendSpotList && recommendSpotList.length > 0 && (
                <RecommendSpot resultList={recommendSpotList} />
              )}
              {recommendAccomList && recommendAccomList.length > 0 && (
                <RecommendAccom resultList={recommendAccomList} />
              )}
            </CommonInner>
            <HoneyTipButton />
          </div>
        )}
        {userInfo.id === programInfoData.writerId && (
          <ButtonContainer>
            <RoundedButton
              $buttonColor="#AEB3B8"
              $buttonWidth="190px"
              $buttonHeight="54px"
              $hoverTextColor="rgba(255, 255, 255, 0.70)"
            >
              <B1Bold $fontColor="white">삭제하기</B1Bold>
            </RoundedButton>
            <RoundedButton
              $buttonColor="var(--color_main1)"
              $buttonWidth="190px"
              $buttonHeight="54px"
              $hoverTextColor="rgba(255, 255, 255, 0.70)"
            >
              <B1Bold $fontColor="white">수정하기</B1Bold>
            </RoundedButton>
          </ButtonContainer>
        )}
      </Container>
    );

  return null;
};

export default DetailProgram;

const Container = styled.div`
  position: relative;
  padding-bottom: 190px;
  display: flex;
  flex-direction: column;
`;

const InnerContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 44px;
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

const BackgroundLine = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  height: 12px;
  position: absolute;
  margin-top: 80px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 48px;
  margin: 135px auto;
`;
