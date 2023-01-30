import React from "react";

import {
  Categories,
  Header,
  Slider,
  Media,
  Products,
  Ideas,
  Search,
  Subscribe,
  Cart,
} from "~/components";
import { StyledWrapper } from "./styled";

const Layout: React.FC = () => (
  <StyledWrapper>
    <Header />
    <Cart />
    <Slider />
    <Media />
    <Products />
    <Categories />
    <Ideas />
    <Search />
    <Subscribe />
  </StyledWrapper>
);

export { Layout };
