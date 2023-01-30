import { TAction, TActionTypes } from "./types";
import { TProduct } from "~/components/Products/Item/types";

export const addToCart: TAction<TProduct> = (product) => {

  return {
    payload: product,
    type: TActionTypes.ADD_TO_CART,
  };
};

export const removeFromCart: TAction<TProduct> = (product) => {

  return {
    payload: product,
    type: TActionTypes.REMOVE_FROM_CART,
  };
};
