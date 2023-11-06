import styled from 'styled-components';

type TextProps = {
  type: 'title' | 'subtitle';
  children: React.ReactNode;
  color?: string;
  $align?: 'start' | 'center' | 'end';
  $weight?: string;
  $margin?: string;
};

const StyledText = styled.div<TextProps>`
  font-size: ${({ type }) => (type === 'title' ? '3.5rem' : '1.8rem')};
  font-weight: ${({ $weight }) => $weight};
  color: ${({ color }) => color};
  text-align: ${({ $align }) => $align};
  margin: ${({ $margin }) => $margin};
`;

const Text: React.FC<TextProps> = ({ type, children, color = 'black', $align = 'start', $weight = '300', $margin }) => {
  return (
    <StyledText color={color} type={type} $align={$align} $weight={$weight} $margin={$margin}>
      {children}
    </StyledText>
  );
};

export default Text;
