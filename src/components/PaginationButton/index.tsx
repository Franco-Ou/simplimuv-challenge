import React, { FC } from 'react';
import { StyledPaginationButton } from './styles';

type PaginationButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const PaginationButton: FC<PaginationButtonProps> = ({ children, onClick, ...rest }) => {
  return (
    <StyledPaginationButton onClick={onClick} {...rest}>
      {children}
    </StyledPaginationButton>
  );
};

export default PaginationButton;
