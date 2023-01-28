import React, { useState } from "react";

import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Buttons } from "./Buttons";
import { StyledWrapper } from "./styled";

const Header: React.FC = () => {
  const [menuIsOpened, toggleMenu] = useState<boolean>(false);

  const handleMenuToggle = (): void => {
    toggleMenu(!menuIsOpened);
  };

  return (
    <StyledWrapper>
      <Logo />
      <Menu isOpened={menuIsOpened} />
      <Buttons onMenuToggle={handleMenuToggle} />
    </StyledWrapper>
  );
};

export { Header };
