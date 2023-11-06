import styled from 'styled-components';
import LikeIcon from '/src/assets/icons/favorite_button2_icon.svg';
import UnLikeIcon from '/src/assets/icons/unfavorite_button2_icon.svg';
import { useCallback } from 'react';

interface Props {
  isLike: boolean;
  setIsLike: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
}

const LikeButton: React.FC<Props> = ({ isLike, setIsLike, type }) => {
  const handleClick = useCallback(() => {
    switch (type) {
      case 'program':
        setIsLike(prev => !prev);
        break;
      case 'posting':
        setIsLike(prev => !prev);
        break;
    }
  }, [isLike]);

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
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;
