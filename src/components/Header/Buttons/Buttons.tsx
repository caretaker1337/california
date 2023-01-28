import React, { useState } from "react";

import { HeaderSearchSvg, HeaderCartSvg } from "~/icons";
import { TProps } from "./types";
import {
  StyledButton,
  StyledWrapper,
  StyledBurger,
  StyledBurgerLine,
} from "./styled";

const Buttons: React.FC<TProps> = ({ onMenuToggle }) => {
  const [menuIsOpened, toggleMenu] = useState<boolean>(false);

  const handleMenuToggle = (): void => {
    toggleMenu(!menuIsOpened);
    onMenuToggle();
  };

  return (
    <StyledWrapper>
      <StyledButton type="button">
        <HeaderSearchSvg />
      </StyledButton>

      <StyledButton type="button">
        <HeaderCartSvg />
      </StyledButton>

      <StyledBurger isOpened={menuIsOpened} onClick={handleMenuToggle} type="button">
        <StyledBurgerLine />
        <StyledBurgerLine />
        <StyledBurgerLine />
      </StyledBurger>
    </StyledWrapper>
  );
};

export { Buttons };
