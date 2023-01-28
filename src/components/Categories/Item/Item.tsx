import React from "react";

import { TProps } from "./types";
import { Button } from "~/theme/components";
import {
  StyledWrapper,
  StyledTitle,
  StyledSubtitle,
  StyledHelper,
  StyledMedia,
} from "./styled";

const Item: React.FC<TProps> = ({ imageURL, title, subtitle }) => (
  <StyledWrapper>
    {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
    {title && <StyledTitle>{title}</StyledTitle>}

    <StyledHelper>
      <Button type="button">Explore</Button>
    </StyledHelper>

    {imageURL && (
      <StyledMedia>
        <img alt={title} src={`images/${imageURL}`} />
      </StyledMedia>
    )}
  </StyledWrapper>
);

export { Item };
