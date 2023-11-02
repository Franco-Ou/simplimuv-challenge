import React, { FC } from "react";
import {
  DescriptionContainer,
  StyledContainer,
  StyledDetailContainer,
} from "./styles";
import Image from "next/image";
import Text from "@components/Text";
import Button from "@components/Button";
import { Product } from "src/interfaces/products";

interface DetailContainerProps {
  product: Product;
}

const DetailContainer: FC<DetailContainerProps> = ({ product }) => {
  return (
    <StyledDetailContainer>
      <StyledContainer style={{ marginRight: "50px" }}>
        <Image src={product.imageUrl} width={500} height={340} alt="Product" />
      </StyledContainer>
      <StyledContainer style={{ display: "flex", flexDirection: "column" }}>
        <Text type="title">{product.productName}</Text>
        <Text type="subtitle">USD {product.price}</Text>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "10px" }}>
            <Button
              $textAlign="start"
              variant="large"
              rounded={true}
              type="primary"
            >
              Purchase
            </Button>
          </div>
          <div style={{ display: "flex" }}>
            <Button
              $textAlign="start"
              variant="large"
              rounded={true}
              type="secondary"
            >
              Add to cart
            </Button>
          </div>
        </div>
        <DescriptionContainer>
          <Text type="subtitle">Description</Text>
          {product.description}
        </DescriptionContainer>
      </StyledContainer>
    </StyledDetailContainer>
  );
};

export default DetailContainer;
