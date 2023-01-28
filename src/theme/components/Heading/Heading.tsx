import React from "react";

import { TProps } from "./types";
import { StyledTitle, StyledText } from "./styled";

const Heading: React.FC<TProps> = ({ title, text }) => (
  <>
    <StyledTitle withText={!!text}>{title}</StyledTitle>
    {text && <StyledText>{text}</StyledText>}
  </>
);

export { Heading };
