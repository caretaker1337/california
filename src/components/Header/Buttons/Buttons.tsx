import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { HeaderSearchSvg, HeaderCartSvg } from "~/icons";
import { TProps } from "./types";
import { StyledButton, StyledWrapper, StyledBurger, StyledBurgerLine, StyledLink } from "./styled";

const Buttons: React.FC<TProps> = ({ onMenuToggle }) => {
  const [menuIsOpened, toggleMenu] = useState<boolean>(false);

  const handleMenuToggle = (): void => {
    toggleMenu(!menuIsOpened);
    onMenuToggle();
  };

  return (
    <StyledWrapper>
      <StyledButton type="button">
        <StyledLink href="/">
          <HeaderSearchSvg />
        </StyledLink>
      </StyledButton>

      <StyledButton type="button">
        <NavLink to="/cart">
          <HeaderCartSvg />
        </NavLink>
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
