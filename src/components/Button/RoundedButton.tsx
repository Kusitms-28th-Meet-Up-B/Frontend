import { B1Bold } from '@/style/fonts/StyledFonts';
import styled from 'styled-components';

interface ButtonStyle {
  $buttonColor: string;
  $textColor: string;
  $buttonWidth: string;
  $buttonHeight: string;
}

interface ButtonProps extends ButtonStyle {
  children: React.ReactNode;
}

const RoundedButton = ({
  $buttonColor,
  $textColor,
  $buttonWidth,
  $buttonHeight,
  children,
}: ButtonProps) => {
  return (
    <StyledButton
      $buttonColor={$buttonColor}
      $textColor={$textColor}
      $buttonWidth={$buttonWidth}
      $buttonHeight={$buttonHeight}
    >
      <div className="button-text">
        <B1Bold $fontColor="white">{children}</B1Bold>
      </div>
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonStyle>`
  border-radius: 40px;
  background-color: ${({ $buttonColor }) => $buttonColor};
  color: ${({ $textColor }) => $textColor};
  width: ${({ $buttonWidth }) => $buttonWidth};
  height: ${({ $buttonHeight }) => $buttonHeight};
  position: relative;

  .button-text {
    display: flex;
    width: min-content;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default RoundedButton;
