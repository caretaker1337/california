import React from "react";
import { Route, Routes } from "react-router";

import {
  Categories,
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
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Slider />
            <Media />
            <Products />
            <Categories />
            <Ideas />
            <Search />
            <Subscribe />
          </>
        }
      />

      <Route path="/cart" element={<Cart />} />
    </Routes>
  </StyledWrapper>
);

export { Layout };
