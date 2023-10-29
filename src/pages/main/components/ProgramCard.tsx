import { B1Bold, B3, B3Bold, H3 } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';

interface Props {
  imageSrc: string;
  remain: number;
  title: string;
  tags: string[];
  like: number;
}

const ProgramCard: React.FC<Props> = ({
  imageSrc,
  remain,
  title,
  tags,
  like,
}) => {
  return (
    <Container imagesrc={imageSrc}>
      <TextContainer>
        <B1Bold $fontColor="#FF7D2C">{`D-${remain ? remain : 0}`}</B1Bold>
        <H3 $fontColor="#fff">{title}</H3>
        <FlexContainer gap={8}>
          {tags.map(tag => (
            <B3 $fontColor="#fff">{`#${tag}`}</B3>
          ))}
        </FlexContainer>
        <FlexContainer gap={4}>
          <img src="/src/assets/icons/icon-heart.svg" alt="heart" />
          <B3Bold $fontColor="#fff">{like}</B3Bold>
        </FlexContainer>
      </TextContainer>
    </Container>
  );
};

export default ProgramCard;

interface ContainerProps {
  imagesrc: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  width: 360px;
  height: 483px;

  border-radius: 20px;
  background-image: url(${({ imagesrc }) => imagesrc});
  background-size: cover;

  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);

  cursor: pointer;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  padding: 24px 33px;
  gap: 8px;
`;

interface FlexContainerProps {
  gap: number;
}

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: ${({ gap }) => gap}px;
`;
