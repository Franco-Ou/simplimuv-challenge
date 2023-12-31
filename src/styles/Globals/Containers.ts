import { styled } from 'styled-components';

export const StyledCenteredContainer = styled.div`
  max-width: 1450px;
  margin: 0 auto;
  padding-left: 60px;
  padding-right: 60px;
`;

export const FlexDivBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 680px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;
