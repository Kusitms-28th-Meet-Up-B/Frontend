import { B2, B4 } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';
import DateInput from '../Input/DateInput';
import FieldTitle from './FieldTitle';

interface DateInputProps {
  field: string;
  startPlaceholder: string;
  endPlaceholder: string;
  startValue: string;
  endValue: string;
  startName: string;
  endName: string;
  onChange: (name: string, value: string) => void;
  alertStartMessage: string;
  alertEndMessage: string;
  isPossibleSubmit: boolean;
}

const DateInputField = ({
  field,
  startPlaceholder,
  endPlaceholder,
  startValue,
  endValue,
  startName,
  endName,
  onChange,
  alertStartMessage,
  alertEndMessage,
  isPossibleSubmit,
}: DateInputProps) => {
  return (
    <InnerContainer>
      <TitleContainer>
        <FieldTitle field={field} />
      </TitleContainer>
      <InputContainer>
        <div className="input-container">
          <DateInput
            placeholder={startPlaceholder}
            value={startValue}
            name={startName}
            onChange={() => onChange(startName, startValue)}
          />
          <B4
            $fontColor={
              !isPossibleSubmit && startValue === '' ? 'red' : 'transparent'
            }
          >
            {alertStartMessage}
          </B4>
        </div>
        <B2 $fontColor="var(--color_gray900)">-</B2>
        <div className="input-container">
          <DateInput
            placeholder={endPlaceholder}
            value={endValue}
            name={endName}
            onChange={() => onChange(endName, endValue)}
          />
          <B4
            $fontColor={
              !isPossibleSubmit && endValue === '' ? 'red' : 'transparent'
            }
          >
            {alertEndMessage}
          </B4>
        </div>
      </InputContainer>
    </InnerContainer>
  );
};

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;

  .input-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  ${B2} {
    margin-bottom: 20px;
  }

  ${B4} {
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
`;

export default DateInputField;
