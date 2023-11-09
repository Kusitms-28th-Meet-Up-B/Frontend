import RoundedInput from '@/pages/RegisterProgram/Input/RoundedInput';
import styled from 'styled-components';
import FieldTitle from './FieldTitle';
import { B4 } from '@/style/fonts/StyledFonts';

// 어느 정도 정리 완료
interface DefaultInputProps {
  field: string;
  contactPlaceholder: string;
  numberPlaceholder: string;
  contactValue: string;
  numberValue: string;
  contactName: string;
  numberName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  alertMessage: string;
  isPossibleSubmit: boolean;
}

const ContactInputField = ({
  field,
  contactPlaceholder,
  numberPlaceholder,
  contactValue,
  numberValue,
  contactName,
  numberName,
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
        <div className="input-container">
          <RoundedInput
            placeholder={contactPlaceholder}
            value={contactValue}
            name={contactName}
            onChange={onChange}
          />
          <RoundedInput
            placeholder={numberPlaceholder}
            value={numberValue}
            name={numberName}
            onChange={onChange}
          />
        </div>
        <B4
          $fontColor={
            !isPossibleSubmit && (contactValue === '' || numberValue === '')
              ? 'red'
              : 'transparent'
          }
        >
          {alertMessage}
        </B4>
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
  padding-top: 18px;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  ${B4} {
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
`;

export default ContactInputField;
