import React from "react";

import { TProps } from "./types";
import {
  StyledWrapper,
  StyledName,
  StyledDescription,
  StyledLink,
  StyledImage,
  StyledMedia,
  StyledPrice,
} from "./styled";

const Item: React.FC<TProps> = ({ imageURL, name, description, price }) => (
  <StyledWrapper>
    <StyledMedia>
      <StyledLink href="#">
        <StyledImage alt={name} src={imageURL} />
      </StyledLink>
    </StyledMedia>

    <StyledName>{name}</StyledName>
    <StyledDescription>{description}</StyledDescription>
    <StyledPrice>$ {price} USD</StyledPrice>
  </StyledWrapper>
);

export { Item };
