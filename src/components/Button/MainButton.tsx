import styled from 'styled-components';

interface ButtonStyle {
  $buttonSize: 'small' | 'large';
  $buttonWidth?: string;
}

interface ButtonProps extends ButtonStyle {
  children: React.ReactNode;
}

const MainButton = ({ $buttonSize, $buttonWidth, children }: ButtonProps) => {
  return (
    <StyledButton $buttonSize={$buttonSize} $buttonWidth={$buttonWidth}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonStyle>`
  background-color: var(--color_sub3);
  border-radius: 10px;
  padding: ${({ $buttonSize }) =>
    $buttonSize === 'small' ? '7.5px 40px' : '16px 56px'};
  width: ${({ $buttonWidth }) => $buttonWidth};
`;

export default MainButton;
