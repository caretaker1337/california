import React, { useContext } from "react";

import { TProps } from "./types";
import {
  StyledWrapper,
  StyledName,
  StyledDescription,
  StyledLink,
  StyledImage,
  StyledMedia,
  StyledPrice,
  StyledButton,
  StyledBox,
} from "./styled";
import { addToCart, AppContext } from "~/store";

const Item: React.FC<TProps> = (product) => {
  const { dispatch } = useContext(AppContext);
  const { imageURL, name, description, price } = product;

  const handleAddProduct = (): void => {
    dispatch(addToCart(product));
  };

  return (
    <StyledWrapper>
      <StyledMedia>
        <StyledLink href="#">
          <StyledImage alt={name} src={imageURL} />
        </StyledLink>
      </StyledMedia>

      <StyledName>{name}</StyledName>
      <StyledDescription>{description}</StyledDescription>
      <StyledBox>
        <StyledPrice>$ {price} USD</StyledPrice>
        <StyledButton type="button" onClick={handleAddProduct}>
          Add to cart
        </StyledButton>
      </StyledBox>
    </StyledWrapper>
  );
};

export { Item };
