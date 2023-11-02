import Card from "@components/Card";
import { StyledCardsContainer } from "./styles";
import { StyledCenteredContainer } from "src/styles/Globals/Containers";

const CardsContainer = () => {
  return (
    <StyledCenteredContainer>
      <StyledCardsContainer>
        <Card
          imageSrc="/images/Street_Bob_114.png"
          productName="Prueba de nombre"
          productPrice="15000"
        />
        <Card
          imageSrc="/images/Street_Bob_114.png"
          productName="Prueba de nombre"
          productPrice="15000"
        />
        <Card
          imageSrc="/images/Street_Bob_114.png"
          productName="Prueba de nombre"
          productPrice="15000"
        />
        <Card
          imageSrc="/images/Street_Bob_114.png"
          productName="Prueba de nombre"
          productPrice="15000"
        />
        <Card
          imageSrc="/images/Street_Bob_114.png"
          productName="Prueba de nombre"
          productPrice="15000"
        />
      </StyledCardsContainer>
    </StyledCenteredContainer>
  );
};

export default CardsContainer;
