import styled from 'styled-components';
import Poster from '@/assets/temp/poster.jpg';
import FavoriteIcon from '@/assets/icons/favorite_icon.svg';
import FavoriteButtonIcon from '@/assets/icons/favorite_button_icon.svg';
import UnfavoriteButtonIcon from '@/assets/icons/unfavorite_button_icon.svg';
import { B1Bold, B3, B3Bold, H3 } from '@/style/fonts/StyledFonts';

const tagList = ['#태안', '#태안군', '#지원사업', '#한달살이'];

const TravelProgramItem = () => {
  return (
    <Container>
      {true ? (
        <img
          className="favorite-button"
          alt="favorite-button-icon"
          src={FavoriteButtonIcon}
        />
      ) : (
        <img
          className="favorite-button"
          alt="unfavorite-button-icon"
          src={UnfavoriteButtonIcon}
        />
      )}
      <img className="poster" alt="poster" src={Poster} />
      <ProgramInfoContainer>
        <B1Bold $fontColor="var(--color_sub3)">D-1</B1Bold>
        <H3 $fontColor="var(--color_gray900)">태안 한달살이</H3>
        <TagContainer>
          {tagList.map(tag => (
            <B3 $fontColor="var(--color_gray400)" key={tag}>
              {tag}
            </B3>
          ))}
        </TagContainer>
        <Favorite>
          <img alt="favorite-icon" src={FavoriteIcon} />
          <B3Bold $fontColor="var(--color_gray600)">153</B3Bold>
        </Favorite>
      </ProgramInfoContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 323px;
  height: 546px;
  position: relative;

  .favorite-button {
    position: absolute;
    right: 17px;
    top: 18px;
  }

  .poster {
    width: 323px;
    height: 400px;
    border-radius: 20px;
  }
`;

const ProgramInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-top: 16px;
  gap: 4px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
`;

const Favorite = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;

  img {
    width: 16px;
    height: 16px;
  }
`;

export default TravelProgramItem;
