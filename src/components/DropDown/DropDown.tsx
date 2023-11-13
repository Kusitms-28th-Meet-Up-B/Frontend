import { B1 } from '@/style/fonts/StyledFonts';
import { useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

interface Props {
  placeholder: string;
  dropdownList: string[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const DropDown: React.FC<Props> = ({
  placeholder,
  dropdownList, // 선택지 리스트
  selected, // 선택된 dropdown을 관리하는 state
  setSelected,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(prev => !prev);
  };
  const handleClickItem = (item: string) => {
    setSelected(item);
  };
  return (
    <Container onClick={handleClick}>
      <FlexBox>
        <B1 $fontColor={selected ? '#17181a' : '#AEB3B8'}>
          {selected ? selected : placeholder}
        </B1>
        {!isOpen && <IoIosArrowDown style={{ fontSize: '20px' }} />}
      </FlexBox>
      {isOpen && (
        <DropDownContainer>
          <Divider />
          {dropdownList.map((dropdown, idx) => (
            <ItemWrapper key={idx} onClick={() => handleClickItem(dropdown)}>
              <B1 $fontColor="#AEB3B8">{dropdown}</B1>
            </ItemWrapper>
          ))}
        </DropDownContainer>
      )}
    </Container>
  );
};

export default DropDown;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: 100%;
  flex-shrink: 0;

  border-radius: 20px;
  border: 1px solid var(--grey-200, #e3e7ed);
  background: var(--main_1, #fff);
  padding: 23px 40px;

  cursor: pointer;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  gap: 20px;
`;

const ItemWrapper = styled.div`
  width: 100%;
  pre {
    &:hover {
      color: #15191d;
      cursor: pointer;
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 20px;
  /* background: #aeb3b8; */
  border-bottom: 1px dashed #aeb3b8;
`;
