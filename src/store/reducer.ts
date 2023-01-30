import React from "react";

import { TAction, TActionTypes, TProduct, TStore } from "./types";

const reducer: React.Reducer<TStore, ReturnType<TAction>> = (store, { payload, type }) => {
  const actions: Record<TActionTypes, () => TStore> = {
    [TActionTypes.SET_PRODUCT]: () => ({
      ...store,
      products: [...store.products, payload as TProduct],
    }),

    [TActionTypes.DEFAULT]: () => store,
  };

  return (actions[type] || actions["DEFAULT"])();
};

export { reducer };
