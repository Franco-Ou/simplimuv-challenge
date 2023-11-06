import { styled } from 'styled-components';

export const StyledCardsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  grid-gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 920px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
