import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Attatchment from './Attatchment';
import Posting from './Posting';
import { PostingDataType } from '@/types';
import PostingNav from './PostingNav';
import { useQuery } from 'react-query';
import { fetchPostingDetail } from '@/apis/posting';
import Loading from '@/components/Loading/Loading';

const PostingBox = () => {
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

  if (isLoading) return <Loading />;

  const postingData: PostingDataType = data?.data?.result;

  return (
    <Container>
      <Posting {...postingData} isLike={isLike} setIsLike={setIsLike} />
      {postingData?.fileName && (
        <Attatchment
          fileSrc={postingData.fileUrl as string}
          fileName={postingData.fileName as string}
        />
      )}
      {/* Todo: 서버에서 이전 다음 글의 id 받아오기 */}
      <PostingNav
        prevId={postingData?.previousId || postingId}
        nextId={postingData?.nextId || postingId}
      />
    </Container>
  );
};

export default PostingBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  gap: 24px;

  > div {
    &:nth-child(3) {
      margin-top: 16px;
    }
  }
`;
