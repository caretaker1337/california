import { TProduct, TAction, TActionTypes } from "./types";

export const setProduct: TAction<TProduct> = (product) => {
  console.log(product);

  return {
    payload: product,
    type: TActionTypes.SET_PRODUCT,
  };
};
