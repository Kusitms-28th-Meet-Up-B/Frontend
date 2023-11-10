import RoundedInput from '@/pages/RegisterProgram/Input/RoundedInput';
import styled from 'styled-components';
import FieldTitle from './FieldTitle';
import { B4 } from '@/style/fonts/StyledFonts';

interface DefaultInputProps {
  field: string;
  placeholder: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  alertMessage: string;
  isPossibleSubmit: boolean;
}

const DefaultInputField = ({
  field,
  placeholder,
  value,
  name,
  onChange,
  alertMessage,
  isPossibleSubmit,
}: DefaultInputProps) => {
  return (
    <InnerContainer>
      <TitleContainer>
        <FieldTitle field={field} />
      </TitleContainer>
      <InputContainer>
        <RoundedInput
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
        />
        {name === 'programName' && (
          <B4
            $fontColor={
              !isPossibleSubmit && (value === '' || value.length > 50)
                ? 'red'
                : 'transparent'
            }
          >
            {alertMessage}
          </B4>
        )}
        {name !== 'programName' && (
          <B4
            $fontColor={
              !isPossibleSubmit && value === '' ? 'red' : 'transparent'
            }
          >
            {alertMessage}
          </B4>
        )}
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
  flex-direction: column;
  gap: 8px;

  ${B4} {
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
`;

export default DefaultInputField;
