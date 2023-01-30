import React, { useContext } from "react";

import { AppContext } from "~/store";
import { Item } from "./Item";
import { StyledList, StyledText, StyledWrapper } from "./styled";

const Cart: React.FC = () => {
  const { store } = useContext(AppContext);
  const { products } = store;

  return (
    <StyledWrapper>
      {products && !!products.length ? (
        <StyledList>
          {products.map(
            ({ id, ...rest }): React.ReactElement => (
              <Item key={id} {...{ id }} {...rest} />
            )
          )}
        </StyledList>
      ) : (
        <StyledText>Cart is empty.</StyledText>
      )}
    </StyledWrapper>
  );
};

export { Cart };
