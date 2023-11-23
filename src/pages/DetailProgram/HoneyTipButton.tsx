import styled from 'styled-components';
import HoneyTipIcon from '@/assets/icons/icon-honey-tip.png';
import RoundedButton from '@/components/Button/RoundedButton';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { B1Bold } from '@/style/fonts/StyledFonts';
import { useNavigate } from 'react-router-dom';

const HoneyTipButton = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="img">
        <div className="button">
          <RoundedButton
            $buttonColor="#282828"
            $buttonWidth="220px"
            $buttonHeight="62px"
            onClick={() => navigate('/about/tips')}
          >
            <div className="button-container">
              <B1Bold $fontColor="white">지원 꿀팁 보기</B1Bold>
              <HiOutlineChevronRight className="icon" />
            </div>
          </RoundedButton>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  right: 52px;
  bottom: 86px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;

  .img {
    background-image: url(${HoneyTipIcon});
    background-size: contain;
    width: 160px;
    height: 210px;
  }

  .button {
    position: absolute;
    bottom: 0;
    right: 0;

    .button-container {
      display: flex;
      flex-direction: row;
      align-items: center;

      .icon {
        color: white;
        font-size: 24px;
        padding-bottom: 2px;
      }
    }
  }
`;

export default HoneyTipButton;
