import { B2Bold, B3Bold } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';
import Posting from './components/Posting';
import { PostingType } from '@/types';
import { useNavigate } from 'react-router-dom';

interface Props {
  postingList: PostingType[];
}

const PostingList: React.FC<Props> = ({ postingList }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <TopBarContainer>
        <B2Bold $fontColor="#15191D" className="board_name">
          {'게시판명'}
        </B2Bold>
        <B2Bold $fontColor="#15191D" className="title">
          {'제목'}
        </B2Bold>
        <B2Bold $fontColor="#15191D" className="writer">
          {'글쓴이'}
        </B2Bold>
        <B2Bold $fontColor="#15191D" className="register_date">
          {'등록일'}
        </B2Bold>
      </TopBarContainer>

      <PostingContainer>
        {postingList?.map(data => <Posting {...data} key={data.id} />)}
      </PostingContainer>

      <WritingButton
        onClick={() => {
          navigate('write');
        }}
      >
        <B3Bold $fontColor="#fff">글쓰기</B3Bold>
      </WritingButton>
    </Container>
  );
};

export default PostingList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;

  width: 100%;
`;

const TopBarContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  padding: 32px 14px;

  background: var(--background, #f6f6f6);

  .board_name {
    width: 63px;
  }
  .title {
    width: 580px;
    text-align: center;
  }
  .writer {
    width: 140px;
    text-align: center;
  }
  .register_date {
    width: 91px;
    text-align: center;
  }
`;

const PostingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const WritingButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;

  padding: 12px 56px;

  margin-top: 24px;

  border-radius: 40px;
  background: var(--Sub-3, #ff7d2c);

  cursor: pointer;
`;
