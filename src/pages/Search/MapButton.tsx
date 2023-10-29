import RoundedButton from '@/components/Button/RoundedButton';
import MapIcon from '@/assets/icons/map_icon.svg';
import { B1Bold } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';

const MapButton = () => {
  return (
    <RoundedButton
      $buttonColor="var(--color_sub3)"
      $buttonWidth="222px"
      $buttonHeight="70px"
    >
      <ButtonTextContainer>
        <B1Bold $fontColor="white">지도에서 보기</B1Bold>
        <img alt="map-icon" src={MapIcon} />
      </ButtonTextContainer>
    </RoundedButton>
  );
};

const ButtonTextContainer = styled.div`
  display: flex;
  flex-direction: row;

  img {
    margin-left: 8px;
  }
`;

export default MapButton;
