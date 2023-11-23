import styled from 'styled-components';
import PostingBox from './PostingBox';
import OtherPostings from './OtherPostings';
import { useEffect, useState } from 'react';
import { PostingDataType } from '@/types';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchPostingDetail } from '@/apis/posting';
import Loading from '@/components/Loading/Loading';

interface Props {
  title: string;
}

const DetailPosting: React.FC<Props> = ({ title }) => {
  const { id } = useParams();
  const postingId = parseInt(id as string, 10);
  const [isLike, setIsLike] = useState(false);

  const postingType: string = window.location.pathname.includes('review')
    ? 'reviews'
    : 'archives';

  const { isLoading, data } = useQuery(
    [postingType, 'detail', postingId],
    fetchPostingDetail(postingType, postingId),
  );

  useEffect(() => {
    const likeCheck = data?.data?.result?.likeCheck;
    if (likeCheck) {
      setIsLike(likeCheck);
    }
  }, [data?.data?.result?.likeCheck]);

  useEffect(() => {
    console.log('render');
  }, []);

  if (isLoading) return <Loading />;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const postingData: PostingDataType = data?.data?.result;

  return (
    <>
      {postingData && (
        <Container>
          <Title>{title}</Title>
          <PostingBox
            id={parseInt(id as string, 10)}
            postingData={postingData}
            isLike={isLike}
            setIsLike={setIsLike}
          />
          {!window.location.pathname.includes('user') && (
            <OtherPostings postingType={postingType} />
          )}
        </Container>
      )}
    </>
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
