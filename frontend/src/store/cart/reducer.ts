import { AnyAction } from "redux";
import { ActionTypes } from "../types";
import { CartState } from "./types";

export const initialCartState: CartState = { products: [] };

export const cartReducer = (state = initialCartState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        products: [...state.products, { ...action.product }],
      };
    default:
      return state;
  }
};
