import MainButton from '@/components/Button/MainButton';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface AdminProfileProps {
  image: string;
  organization: string;
  email: string;
}

const AdminProfile = (profile: AdminProfileProps) => {
  const navigate = useNavigate();

  return (
    <Container>
      <ProfileContainer>
        <ProfileImage>
          <img alt="profil-image" src={profile.image} />
        </ProfileImage>
        <Profile>
          <div>{profile.organization}</div>
          <div>{profile.email}</div>
        </Profile>
      </ProfileContainer>
      <MainButton
        $buttonColor="var(--color_sub3)"
        $buttonWidth="340px"
        $buttonHeight="57px"
        onClick={() => navigate('/admin/register')}
      >
        <ButtonText>공고 등록</ButtonText>
      </MainButton>
    </Container>
  );
};

export default AdminProfile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ProfileContainer = styled.div`
  background-color: #35393d;
  widht: 340px;
  height: 409px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 34px;
`;

const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 70%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  div {
    color: white;
    text-align: center;
    font-family: SUIT-Medium;
    font-size: 20px;
    font-style: normal;
    line-height: 150%; /* 30px */
  }
`;

const ButtonText = styled.pre`
  color: white;
  font-family: SUIT-Regular;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 25.2px */
`;
