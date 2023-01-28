import React from "react";

import { Button } from "~/theme/components";
import { TProps } from "./types";
import {
  StyledWrapper,
  StyledContent,
  StyledTitle,
  StyledMedia,
  StyledText,
  StyledImage,
} from "./styled";

const Item: React.FC<TProps> = ({ description, imageURL, title }) => (
  <StyledWrapper>
    <StyledContent>
      {title && <StyledTitle>{title}</StyledTitle>}

      {description && (
        <StyledText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est
          dui, aliquam, tempor. Faucibus morbi turpis.
        </StyledText>
      )}

      <Button type="button">Explore</Button>
    </StyledContent>

    <StyledMedia>
      <StyledImage alt={title} src={`images/${imageURL}`} />
    </StyledMedia>
  </StyledWrapper>
);

export { Item };
