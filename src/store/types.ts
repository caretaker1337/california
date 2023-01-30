import React from "react";

import { TProduct } from "~/components/Products/Item/types";

export enum TActionTypes {
  DEFAULT = "DEFAULT",
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
}

export interface TStore {
  products: TProduct[];
}

export interface TAction<P = unknown> {
  (payload: P): {
    payload: P;
    type: TActionTypes;
  };
}

export interface TContext {
  dispatch: React.Dispatch<ReturnType<TAction>>;
  store: TStore;
}
