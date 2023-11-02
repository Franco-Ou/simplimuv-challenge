import React from "react";
import {
  DescriptionContainer,
  StyledContainer,
  StyledDetailContainer,
} from "./styles";
import Image from "next/image";
import Text from "@components/Text";
import Button from "@components/Button";

const DetailContainer = () => {
  return (
    <StyledDetailContainer>
      <StyledContainer style={{ marginRight: "50px" }}>
        <Image src="/images/bike.png" width={500} height={340} alt="Product" />
      </StyledContainer>
      <StyledContainer style={{ display: "flex", flexDirection: "column" }}>
        <Text type="title">Kit Protección</Text>
        <Text type="subtitle">USD 400</Text>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi libero
          quis, et alias aspernatur corporis odit eum maxime accusamus,
          reiciendis eos aperiam deserunt autem dolorem dignissimos nam natus
          ipsum vitae.
        </DescriptionContainer>
      </StyledContainer>
    </StyledDetailContainer>
  );
};

export default DetailContainer;
