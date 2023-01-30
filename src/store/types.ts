import React from "react";

export enum TActionTypes {
  DEFAULT = "DEFAULT",
  SET_PRODUCT = "SET_PRODUCT",
}

export interface TProduct {
  name: string;
  price: number;
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
