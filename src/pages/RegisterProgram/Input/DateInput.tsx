import RoundedInput from '@/pages/RegisterProgram/Input/RoundedInput';
import CalendarIcon from '@/assets/icons/calendar_icon.svg';
import styled from 'styled-components';

interface DefaultInputProps {
  placeholder: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateInput = ({
  placeholder,
  value,
  name,
  onChange,
}: DefaultInputProps) => {
  return (
    <Container>
      <RoundedInput
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
      <img alt="calendar-icon" src={CalendarIcon} className="calendar-icon" />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;

  .calendar-icon {
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translate(-50%, -50%);
  }
`;

export default DateInput;
