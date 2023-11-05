import styled from 'styled-components';

interface RoundedInputProps {
  placeholder: string;
  name: string;
  value: string;
  onChange: () => void;
}

const RoundedInput = ({
  placeholder,
  name,
  value,
  onChange,
}: RoundedInputProps) => {
  return (
    <Wrapper>
      <input
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  input {
    width: 100%;
    border-radius: 40px;
    border: 1px solid var(--color_gray200);
    padding: 20px 36px;

    color: var(--color_gray900);
    font-family: SUIT-Medium;
    font-size: 18px;
    font-style: normal;
    line-height: 40%;
  }

  input::placeholder {
    color: var(--color_gray400);
  }
`;
export default RoundedInput;
