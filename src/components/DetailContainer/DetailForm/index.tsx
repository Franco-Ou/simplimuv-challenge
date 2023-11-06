import React, { FC } from 'react';
import {
  StyledContainer,
  StyledInfoRow,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
  StyledProductName
} from '../styles';
import Text from '@components/Text';
import Button from '@components/Button';
import { ProductProps } from 'src/interfaces/products';

interface DetailFormProps {
  product: ProductProps;
}

const DetailForm: FC<DetailFormProps> = ({ product }) => {
  return (
    <StyledContainer style={{ display: 'flex', flexDirection: 'column' }}>
      <form>
        <Text $margin='10px 0' type='subtitle' $weight='300'>
          Detail Quotation
        </Text>
        <StyledProductName>{product.productName}</StyledProductName>
        <StyledInfoRow>
          <StyledLabel>Price</StyledLabel>
          <StyledLabel>${product.price}</StyledLabel>
        </StyledInfoRow>
        <StyledInputContainer>
          <StyledLabel htmlFor='name'>Name</StyledLabel>
          <StyledInput name='name' type='text' />
          <StyledLabel htmlFor='lastname'>Lastname</StyledLabel>
          <StyledInput name='lastname' type='text' />
          <StyledLabel htmlFor='email'>Email</StyledLabel>
          <StyledInput name='email' type='email' />
          <StyledLabel htmlFor='phone'>Phone</StyledLabel>
          <StyledInput name='phone' type='number' />
        </StyledInputContainer>
        <Button type='primary' $variant='fullWidth' $rounded={true}>
          Submit
        </Button>
      </form>
    </StyledContainer>
  );
};

export default DetailForm;
