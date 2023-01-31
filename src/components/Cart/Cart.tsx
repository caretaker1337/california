import React, { useContext, useMemo } from "react";

import { AppContext } from "~/store";
import { TProduct } from "../Products/Item/types";
import { Item } from "./Item";
import { StyledLayout, StyledList, StyledPrice, StyledText, StyledWrapper } from "./styled";

const Cart: React.FC = () => {
  const { store } = useContext(AppContext);
  const { products } = store;

  const totalPrice = useMemo((): number => {
    return products.reduce((acc: number, product: TProduct) => {
      return acc + product.price;
    }, 0);
  }, [products]);

  return (
    <StyledLayout>
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

      {totalPrice > 0 && <StyledPrice>Total price: {totalPrice} USD</StyledPrice>}
    </StyledLayout>
  );
};

export { Cart };
