import styled from 'styled-components';
import DropdownInput from '../Input/DropdownInput';
import FieldTitle from './FieldTitle';
import { B4 } from '@/style/fonts/StyledFonts';

interface DropdownInputProps {
  field: string;
  selectedLocation: string;
  onDropdownClick: (location: string) => void;
  alertMessage: string;
  isPossibleSubmit: boolean;
}

const DropdownInputField = ({
  field,
  selectedLocation,
  onDropdownClick,
  alertMessage,
  isPossibleSubmit,
}: DropdownInputProps) => {
  return (
    <InnerContainer>
      <TitleContainer>
        <FieldTitle field={field} />
      </TitleContainer>
      <InputContainer>
        <DropdownInput
          selectedLocation={selectedLocation}
          onDropdownClick={onDropdownClick}
        />
        <B4
          $fontColor={
            !isPossibleSubmit && selectedLocation === '' ? 'red' : 'transparent'
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

export default DropdownInputField;
