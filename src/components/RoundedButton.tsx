import { B1Bold } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';

interface ButtonStyle {
  $buttonColor: string;
  $textColor: string;
}

interface ButtonProps extends ButtonStyle {
  children: React.ReactNode;
}

const RoundedButton = ({ $buttonColor, $textColor, children }: ButtonProps) => {
  return (
    <StyledButton $buttonColor={$buttonColor} $textColor={$textColor}>
      <B1Bold $fontColor="white">{children}</B1Bold>
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonStyle>`
  min-width: 154px;
  max-width: 222px;
  padding: 16px 40px;
  border-radius: 40px;
  background-color: ${({ $buttonColor }) => $buttonColor};
  color: ${({ $textColor }) => $textColor};
`;

export default RoundedButton;
