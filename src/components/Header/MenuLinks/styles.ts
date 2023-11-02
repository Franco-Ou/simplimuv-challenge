import { styled } from "styled-components";

export const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
`;

export const StyledLi = styled.li`
  margin: 16px;
`;

export const StyledLink = styled.a`
  cursor: pointer;
  transition: all 0.35s ease-in-out;
  padding: 5px;

  &:hover {
    color: #903DF7;
  }
`;
