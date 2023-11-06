import styled from 'styled-components';

export const StyledPaginationButton = styled.button`
  border-radius: 5px;
  padding: 10px;
  margin-right: 5px;
  background-color: #903df7;
  color: #fff;
  border: none;
  cursor: pointer;

  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: alias;
  }
`;
