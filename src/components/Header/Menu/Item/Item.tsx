import React from "react";

import { StyledLink } from "./styled";
import { TProps } from "./types";

const Item: React.FC<TProps> = ({ text }) => (
  <li>
    <StyledLink href="#">{text}</StyledLink>
  </li>
);

export { Item };
