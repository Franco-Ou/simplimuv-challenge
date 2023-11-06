import { FC, useState } from 'react';
import {
  DescriptionContainer,
  StyledContainer,
  StyledDetailContainer,
  StyledInput,
  StyledInputContainer
} from './styles';
import Image from 'next/image';
import Text from '@components/Text';
import Button from '@components/Button';
import { ProductProps } from 'src/interfaces/products';

interface DetailContainerProps {
  product: ProductProps;
}

const DetailContainer: FC<DetailContainerProps> = ({ product }) => {
  const [purchaseClicked, setPurchaseClicked] = useState(false);

  return (
    <StyledDetailContainer>
      <StyledContainer style={{ marginRight: '50px' }}>
        <Image priority src={product.imageUrl} width={550} height={340} alt='Product' />
      </StyledContainer>
      {purchaseClicked ? (
        <StyledContainer style={{ display: 'flex', flexDirection: 'column' }}>
          <form>
            <Text $margin='10px 0' type='subtitle' $weight='300'>
              Detail Quotation
            </Text>
            <StyledInputContainer>
              <label style={{ fontWeight: '300' }} htmlFor='name'>
                Name
              </label>
              <StyledInput name='name' type='text' />
              <label style={{ fontWeight: '300' }} htmlFor='lastname'>
                Lastname
              </label>
              <StyledInput name='lastname' type='text' />
              <label style={{ fontWeight: '300' }} htmlFor='email'>
                Email
              </label>
              <StyledInput name='email' type='email' />
              <label style={{ fontWeight: '300' }} htmlFor='phone'>
                Phone
              </label>
              <StyledInput name='phone' type='number' />
            </StyledInputContainer>
            <Button type='primary' $variant='fullWidth' $rounded={true}>
              Submit
            </Button>
          </form>
        </StyledContainer>
      ) : (
        <StyledContainer style={{ display: 'flex', flexDirection: 'column' }}>
          <Text type='title'>{product.productName}</Text>
          <Text type='subtitle'>USD {product.price}</Text>
          <div>
            <Button
              onClick={() => setPurchaseClicked(true)}
              $textAlign='start'
              $variant='large'
              $rounded={true}
              type='primary'
            >
              Purchase
            </Button>
          </div>
          <DescriptionContainer>
            <Text type='subtitle'>Description</Text>
            {product.description}
          </DescriptionContainer>
        </StyledContainer>
      )}
    </StyledDetailContainer>
  );
};

export default DetailContainer;
