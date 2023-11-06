import { FC, useState } from 'react';
import { DescriptionContainer, StyledContainer, StyledDetailContainer, StyledImage } from './styles';
import Image from 'next/image';
import Text from '@components/Text';
import Button from '@components/Button';
import { ProductProps } from 'src/interfaces/products';
import DetailForm from './DetailForm';
import { useRouter } from 'next/router';

interface DetailContainerProps {
  product: ProductProps;
}

const DetailContainer: FC<DetailContainerProps> = ({ product }) => {
  const [purchaseClicked, setPurchaseClicked] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const router = useRouter();

  return (
    <>
      {formSent ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image objectFit='cover' src={'/images/purple-check.png'} alt='Check' width={130} height={110} />
          <Text type='title'>Thank you!</Text>
          <Button onClick={() => router.push('/')} $variant='large' $rounded>
            Go to home
          </Button>
        </div>
      ) : (
        <StyledDetailContainer>
          <StyledContainer style={{ marginRight: '50px' }}>
            <StyledImage src={product.imageUrl} alt='Product' />
          </StyledContainer>
          {purchaseClicked ? (
            <DetailForm product={product} setFormSent={setFormSent} />
          ) : (
            <StyledContainer style={{ display: 'flex', flexDirection: 'column' }}>
              <Text type='title'>{product.productName}</Text>
              <Text type='subtitle'>USD {product.price}</Text>
              <div>
                <Button onClick={() => setPurchaseClicked(true)} $textAlign='start' $variant='large' $rounded={true}>
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
      )}
    </>
  );
};

export default DetailContainer;
