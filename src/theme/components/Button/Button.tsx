import React from "react";

import { TProps } from "./types";
import { StyledButton } from "./styled";

const Button: React.FC<TProps> = ({ children }) => (
  <StyledButton>{children}</StyledButton>
);

export { Button };
