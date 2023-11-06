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

export const StyledProductName = styled.p`
  font-size: 20px;
  font-weight: 300;
`;

export const StyledInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-bottom: 20px;
  border-bottom: 1px solid #e5e5e5;
  padding: 5px 0;
`;

export const StyledLabel = styled.label`
  font-weight: 300;
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
