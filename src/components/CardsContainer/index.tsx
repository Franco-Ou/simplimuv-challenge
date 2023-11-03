import Card from '@components/Card';
import { StyledCardsContainer } from './styles';
import { StyledCenteredContainer } from 'src/styles/Globals/Containers';
import { FC } from 'react';
import { ProductProps } from 'src/interfaces/products';

interface CardsContainerProps {
  products: ProductProps[];
}

const CardsContainer: FC<CardsContainerProps> = ({ products }) => {
  return (
    <StyledCenteredContainer>
      <StyledCardsContainer>
        {products &&
          products.map((product) => {
            return (
              <Card
                key={product._id}
                id={product._id}
                imageUrl={product.imageUrl}
                productName={product.productName}
                price={product.price}
              />
            );
          })}
      </StyledCardsContainer>
    </StyledCenteredContainer>
  );
};

export default CardsContainer;
