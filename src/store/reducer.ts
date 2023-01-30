import React from "react";

import { TProduct } from "~/components/Products/Item/types";
import { TAction, TActionTypes, TStore } from "./types";

const reducer: React.Reducer<TStore, ReturnType<TAction>> = (store, { payload, type }) => {
  const actions: Record<TActionTypes, () => TStore> = {
    [TActionTypes.ADD_TO_CART]: () => {
      const { products } = store;
      const { id } = payload as TProduct;

      if (products.some((product: TProduct) => product.id === id)) {
        return store;
      }

      return {
        ...store,
        products: [...store.products, payload as TProduct],
      };
    },

    [TActionTypes.REMOVE_FROM_CART]: () => {
      const { products } = store;
      const { id } = payload as TProduct;

      const filteredProducts = products.filter((product) => product.id !== id);

      return {
        ...store,
        products: filteredProducts
      };
    },

    [TActionTypes.DEFAULT]: () => store,
  };

  return (actions[type] || actions["DEFAULT"])();
};

export { reducer };