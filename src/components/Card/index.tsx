import React, { FC } from "react";
import { StyledCard, StyledText } from "./styles";
import Image from "next/image";
import { StyledCardButton } from "@components/Button/styles";

interface CardProps {
  imageSrc: string;
  productName: string;
  productPrice: string;
}

const Card: FC<CardProps> = ({ imageSrc, productName, productPrice }) => {
  return (
    <>
      <StyledCard>
        <Image
          src={imageSrc}
          alt="Street Bob 114"
          width={200}
          height={100}
          style={{ marginBottom: "20px" }}
        />
        <StyledText>{productName}</StyledText>
        <StyledText>${productPrice}</StyledText>
        <StyledCardButton>Ver Más</StyledCardButton>
      </StyledCard>
    </>
  );
};

export default Card;
