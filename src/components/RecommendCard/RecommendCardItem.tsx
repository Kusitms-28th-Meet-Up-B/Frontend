import { H3 } from '@/style/fonts/StyledFonts';
import { RecommendDataType } from '@/types';
import styled from 'styled-components';

const RecommendCardItem = ({ result }: { result: RecommendDataType }) => {
  return (
    <Container>
      <img className="image" alt="image" src={result.photoUrl} />

      <CardInfoContainer>
        <H3 $fontColor="var(--color_gray900)">{result.title}</H3>
      </CardInfoContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 323px;
  height: 323px;
  position: relative;
  cursor: pointer;

  .image {
    width: 323px;
    height: 400px;
    border-radius: 20px;
    //object-fit: cover;
  }
`;

const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-top: 16px;
  gap: 4px;
`;

export default RecommendCardItem;
