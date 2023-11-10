import { CommonInner } from '@/style/common';
import styled from 'styled-components';
import { USER_INFO_TAG } from '@/constants/User/profile';
import { UserInfoType } from '@/types';
import { B1, B1Bold, B3Bold, B4 } from '@/style/fonts/StyledFonts';
import MainButton from '@/components/Button/MainButton';
import MyTitle from '@/components/Title/MyTitle';

// 임시 데이터
const userInfo: UserInfoType = {
  name: '안재국',
  nickname: '체크재국',
  id: 'travelmaker',
  phoneNumber: '010-1234-5678',
  email: 'checkjk@gmail.com',
};

const Profile = () => {
  return (
    <CommonInner>
      <Container>
        <MyTitle>회원정보</MyTitle>
        <div className="information-container">
          <MainButton
            $buttonColor="var(--color_sub3)"
            $buttonWidth="108px"
            $buttonHeight="38px"
          >
            <B3Bold $fontColor="white">수정</B3Bold>
          </MainButton>
          <InfoContainer>
            {Object.keys(USER_INFO_TAG).map(key => (
              <Information key={key}>
                <B1Bold $fontColor="var(--color_gray900)" className="title">
                  {USER_INFO_TAG[key]}
                </B1Bold>
                <div className="content">
                  <B1 $fontColor="var(--color_gray900)">{userInfo[key]}</B1>
                  {key === 'email' && (
                    <AuthTag>
                      <B4 $fontColor="var(--color_sub2)">인증완료</B4>
                    </AuthTag>
                  )}
                </div>
              </Information>
            ))}
          </InfoContainer>
        </div>
      </Container>
    </CommonInner>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 120px;
  margin-bottom: 180px;

  .information-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-end;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 56px;
  border-radius: 20px;
  background: #fafafa;
  width: 1200px;
  height: 560px;
`;

const Information = styled.div`
  display: flex;
  flex-direction: row;

  .title {
    width: 170px;
  }

  .content {
    min-width: 716px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
`;

const AuthTag = styled.div`
  background-color: #ffeccf;
  padding: 4px 16px;
  border-radius: 20px;
`;

export default Profile;
