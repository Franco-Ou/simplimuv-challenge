import { styled } from 'styled-components';

export const StyledDetailContainer = styled.section`
  margin: 40px auto;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledContainer = styled.div`
  width: 50%;
  margin-bottom: 40px;
`;

export const DescriptionContainer = styled.div`
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  padding: 10px;
`;

export const StyledInput = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  margin-bottom: 20px;
`;

export const StyledInputContainer = styled.div`
  grid-template-columns: 1fr;
  display: grid;
`;
