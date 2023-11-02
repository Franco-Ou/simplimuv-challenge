import React from "react";
import styled from "styled-components";

type ButtonProps = {
  variant: "small" | "medium" | "large";
  onClick?: () => void;
  rounded?: boolean;
  children: React.ReactNode;
  type: "primary" | "secondary";
  textAlign?: "start" | "center" | "end";
};

const getWidth = (variant: string | undefined) => {
  switch (variant) {
    case "small":
      return "100px";
    case "medium":
      return "150px";
    case "large":
      return "200px";
    default:
      return "auto";
  }
};

const StyledButton = styled.button<ButtonProps>`
  width: ${({ variant }) => getWidth(variant)};
  border-radius: ${({ rounded }) => (!rounded ? "0px" : "5px")};
  padding: 1rem;
  background-color: ${({ type }) =>
    type === "primary" ? "#903df7" : "#383d42"};
  color: #fff;
  border: none;
  font-family: Roboto;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: ${({ textAlign }) => textAlign};

  &:hover {
    background-color: ${({ type }) =>
      type === "primary" ? "#8325f7" : "#121314"};
  }
`;

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant,
  type,
  rounded,
  textAlign = "center",
}) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      rounded={rounded}
      type={type}
      textAlign={textAlign}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
