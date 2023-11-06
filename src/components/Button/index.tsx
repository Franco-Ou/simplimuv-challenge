import styled from 'styled-components';

type ButtonProps = {
  $variant: 'small' | 'medium' | 'large' | 'fullWidth';
  onClick?: () => void;
  $rounded?: boolean;
  children: React.ReactNode;
  $textAlign?: 'start' | 'center' | 'end';
};

const getWidth = ($variant: string | undefined) => {
  switch ($variant) {
    case 'small':
      return '100px';
    case 'medium':
      return '150px';
    case 'large':
      return '200px';
    case 'fullWidth':
      return '100%';
    default:
      return 'auto';
  }
};

const StyledButton = styled.button<ButtonProps>`
  width: ${({ $variant }) => getWidth($variant)};
  border-radius: ${({ $rounded }) => (!$rounded ? '0px' : '5px')};
  padding: 1rem;
  background-color: #903df7;
  color: #fff;
  border: none;
  font-family: Roboto;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: ${({ $textAlign }) => $textAlign};

  &:hover {
    background-color: #8325f7;
  }
`;

const Button: React.FC<ButtonProps> = ({ onClick, children, $variant, $rounded, $textAlign = 'center' }) => {
  return (
    <StyledButton $variant={$variant} onClick={onClick} $rounded={$rounded} $textAlign={$textAlign}>
      {children}
    </StyledButton>
  );
};

export default Button;
