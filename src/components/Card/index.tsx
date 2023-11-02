import React, { FC } from "react";
import { StyledCard, StyledText } from "./styles";
import Image from "next/image";
import { StyledCardButton } from "@components/Button/styles";

interface CardProps {
  imageUrl: string;
  productName: string;
  price: number;
}

const Card: FC<CardProps> = ({ imageUrl, productName, price }) => {
  return (
    <>
      <StyledCard>
        <Image
          src={imageUrl}
          alt="Street Bob 114"
          width={200}
          height={100}
          style={{ marginBottom: "20px" }}
        />
        <StyledText>{productName}</StyledText>
        <StyledText>${price}</StyledText>
        <StyledCardButton>Ver Más</StyledCardButton>
      </StyledCard>
    </>
  );
};

export default Card;
