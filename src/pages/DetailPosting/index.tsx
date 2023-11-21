import styled from 'styled-components';
import PostingBox from './PostingBox';
import OtherPostings from './OtherPostings';

interface Props {
  title: string;
}

const DetailPosting: React.FC<Props> = ({ title }) => {
  const postingType: string = window.location.pathname.includes('review')
    ? 'reviews'
    : 'archives';

  return (
    <Container>
      <Title>{title}</Title>
      <PostingBox postingType={postingType} />
      <OtherPostings postingType={postingType} />
    </Container>
  );
};

export default DetailPosting;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 1440px;
  margin: 229px auto 0;
`;

const Title = styled.pre`
  color: var(--gray-900, #15191d);
  font-family: 'Recipekorea';
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 54px */
`;
