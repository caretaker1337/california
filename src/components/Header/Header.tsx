import React, { useState } from "react";

import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Buttons } from "./Buttons";
import { StyledLayout, StyledWrapper } from "./styled";

const Header: React.FC = () => {
  const [menuIsOpened, toggleMenu] = useState<boolean>(false);

  const handleMenuToggle = (): void => {
    toggleMenu(!menuIsOpened);
  };

  return (
    <StyledWrapper>
      <StyledLayout>
        <Logo />
        <Menu isOpened={menuIsOpened} />
        <Buttons onMenuToggle={handleMenuToggle} />
      </StyledLayout>
    </StyledWrapper>
  );
};

export { Header };
