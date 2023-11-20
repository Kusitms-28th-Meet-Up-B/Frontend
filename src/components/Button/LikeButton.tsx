import styled from 'styled-components';

import LikeIcon from '@/assets/icons/favorite_button2_icon.svg';
import UnLikeIcon from '@/assets/icons/unfavorite_button2_icon.svg';
import { useCallback } from 'react';
import { postLike } from '@/apis/like';
import { QueryCache } from 'react-query';

interface Props {
  id: number;
  isLike: boolean;
  setIsLike: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
}

const LikeButton: React.FC<Props> = ({ id, isLike, setIsLike, type }) => {
  // Todo: 인자로 id 전달받아서 서버에 찜 목록에 등록하는 API 연결
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      postLike(type, id);
      setIsLike(prev => !prev);
      // Todo: 여기서 좋아요 누른 글에 대한 캐시를 지우면 좋을듯
    },
    [isLike],
  );

  return (
    <Wrapper>
      {isLike ? (
        <img src={LikeIcon} onClick={handleClick} />
      ) : (
        <img src={UnLikeIcon} onClick={handleClick} />
      )}
    </Wrapper>
  );
};

export default LikeButton;

const Wrapper = styled.div`
  z-index: 3;
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;
