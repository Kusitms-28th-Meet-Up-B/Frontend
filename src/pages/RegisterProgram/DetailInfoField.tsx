import { DETAIL_INFO_PLACEHOLDER } from '@/constants/Register';
import { H3 } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';

interface DetailInfoFieldProps {
  value: string;
  onChange: () => void;
}

const DetailInfoField = ({ value, onChange }: DetailInfoFieldProps) => {
  return (
    <Container>
      <H3 $fontColor="var(--color_gray900)">상세 입력 내용</H3>
      <textarea
        placeholder={DETAIL_INFO_PLACEHOLDER}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 100px 0px;

  textarea {
    resize: none;
    width: 1400px;
    height: 696px;
    padding: 40px;
    border-radius: 20px;
    border: 1px solid var(--color_gray200);

    color: var(--color_gray900);
    font-family: SUIT-Medium;
    font-size: 18px;
    font-style: normal;
    line-height: 140%;
    white-space: pre-wrap;
  }

  textarea::placeholder {
    color: var(--color_gray400);
  }
`;

export default DetailInfoField;
