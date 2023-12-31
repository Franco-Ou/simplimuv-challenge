import React, { Dispatch, FC, SetStateAction, useState } from 'react';
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
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';

interface DetailFormProps {
  product: ProductProps;
  setFormSent: Dispatch<SetStateAction<boolean>>;
}

const DetailForm: FC<DetailFormProps> = ({ product, setFormSent }) => {
  const { register, handleSubmit } = useForm({
    mode: 'onBlur'
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const body = {
      name: data.name_input,
      lastName: data.lastname_input,
      email: data.email_input,
      phone: String(data.phone_input)
    };
    try {
      await axios.post('/api/saveLead', body);
      setFormSent(true);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  return (
    <StyledContainer style={{ display: 'flex', flexDirection: 'column' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text $margin='10px 0' type='subtitle' $weight='300'>
          Detail Quotation
        </Text>
        <StyledProductName>{product.productName}</StyledProductName>
        <StyledInfoRow>
          <StyledLabel>Price</StyledLabel>
          <StyledLabel>${product.price}</StyledLabel>
        </StyledInfoRow>
        <StyledInputContainer>
          <StyledLabel htmlFor='name_input'>Name</StyledLabel>
          <StyledInput
            type='text'
            {...register('name_input', {
              required: 'Name is required'
            })}
          />
          <StyledLabel htmlFor='lastname'>Lastname</StyledLabel>
          <StyledInput
            type='text'
            {...register('lastname_input', {
              required: 'Lastname is required'
            })}
          />
          <StyledLabel htmlFor='email_input'>Email</StyledLabel>
          <StyledInput
            type='email'
            {...register('email_input', {
              required: 'Email is required'
            })}
          />
          <StyledLabel htmlFor='phone_input'>Phone</StyledLabel>
          <StyledInput
            type='number'
            {...register('phone_input', {
              required: 'Phone is required'
            })}
          />
        </StyledInputContainer>
        <Button type='submit' $variant='fullWidth' $rounded={true}>
          Submit
        </Button>
      </form>
    </StyledContainer>
  );
};

export default DetailForm;
