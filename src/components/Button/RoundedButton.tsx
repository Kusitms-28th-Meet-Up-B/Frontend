import styled from 'styled-components';

interface ButtonStyle {
  $buttonColor: string;
  $buttonWidth: string;
  $buttonHeight: string;
}

interface ButtonProps extends ButtonStyle {
  children: React.ReactNode;
}

const RoundedButton = ({
  $buttonColor,
  $buttonWidth,
  $buttonHeight,
  children,
}: ButtonProps) => {
  return (
    <StyledButton
      $buttonColor={$buttonColor}
      $buttonWidth={$buttonWidth}
      $buttonHeight={$buttonHeight}
    >
      <div className="button-text">{children}</div>
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonStyle>`
  border-radius: 40px;
  background-color: ${({ $buttonColor }) => $buttonColor};
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
