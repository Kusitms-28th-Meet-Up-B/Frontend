import { B2, H3 } from '@/style/fonts/StyledFonts';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ArrowIcon from '@/assets/icons/icon-arrow.svg';

interface Props {
  iconSrc: string;
  description: string;
  title: string;
  link: string;
  backgroundColor: string;
}

const NavCard: React.FC<Props> = ({
  iconSrc,
  description,
  title,
  link,
  backgroundColor,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(link);
  };
  return (
    <Container background={backgroundColor} onClick={handleClick}>
      <InnerContainer>
        <IconWrapper>
          <img src={iconSrc} alt="pin" />
        </IconWrapper>
        <TextContainer>
          <B2 $fontColor="#fff">{description}</B2>
          <Title>
            <H3 $fontColor="#fff">{title}</H3>
            <img src={ArrowIcon} alt="arrow" />
          </Title>
        </TextContainer>
      </InnerContainer>
    </Container>
  );
};

export default NavCard;

interface ContainerProps {
  background: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 440px;
  gap: 24px;
  flex-shrink: 0;

  border-radius: 20px;
  background: ${({ background }) => background};

  cursor: pointer;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 28px;
`;

const IconWrapper = styled.div`
  width: 104px;
  height: 104px;

  border-radius: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 4px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 4px;
`;
