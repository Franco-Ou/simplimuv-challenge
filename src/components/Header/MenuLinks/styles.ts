import { styled } from 'styled-components';

export const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    text-align: center;
    display: block;
    margin: 0;
    padding: 0;
  }
`;

export const StyledLi = styled.li`
  margin: 16px;
`;

export const StyledLink = styled.a<{ $activePage: boolean }>`
  cursor: pointer;
  transition: all 0.35s ease-in-out;
  padding: 5px;
  color: ${({ $activePage }) => ($activePage ? '#903df7' : '#000')};

  &:hover {
    color: #903df7;
  }
`;
