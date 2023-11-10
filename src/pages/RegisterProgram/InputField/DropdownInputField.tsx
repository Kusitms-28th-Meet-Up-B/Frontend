import styled from 'styled-components';
import DropdownInput from '../Input/DropdownInput';
import FieldTitle from './FieldTitle';
import { B4 } from '@/style/fonts/StyledFonts';
import { ProgramRegisterInfoType } from '@/types';
import { INPUT_FIELD } from '@/constants/Register';

interface DropdownInputProps {
  title: string;
  programContent: ProgramRegisterInfoType;
  onDropdownClick: (location: string) => void;
  isPossibleSubmit: boolean;
}

const DropdownInputField = ({
  title,
  programContent,
  onDropdownClick,
  isPossibleSubmit,
}: DropdownInputProps) => {
  return (
    <InnerContainer>
      <TitleContainer>
        <FieldTitle field={INPUT_FIELD[title].title} />
      </TitleContainer>
      <InputContainer>
        <DropdownInput
          selectedLocation={programContent[title]}
          onDropdownClick={onDropdownClick}
        />
        <B4
          $fontColor={
            !isPossibleSubmit && programContent[title] === ''
              ? 'red'
              : 'transparent'
          }
        >
          {INPUT_FIELD[title].alertMessage}
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
