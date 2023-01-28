import React from "react";

import { Item } from "./Item";
import { TMenuItem } from "./Item/types";
import { TProps } from "./types";
import { StyledList, StyledWrapper } from "./styled";

const items: TMenuItem[] = [
  {
    id: "menu-item-1",
    text: "All Products",
  },
  {
    id: "menu-item-2",
    text: "Solutions",
  },
  {
    id: "menu-item-3",
    text: "About",
  },
  {
    id: "menu-item-4",
    text: "Support",
  },
];

console.log(items);

const Menu: React.FC<TProps> = ({ isOpened }) => (
  <StyledWrapper {...{ isOpened }}>
    <StyledList>
      <Item text="All Products" />
      <Item text="Solutions" />
      <Item text="About" />
      <Item text="Support" />
    </StyledList>
  </StyledWrapper>
);

export { Menu };
