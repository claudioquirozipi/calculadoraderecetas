import {
  SALES_READ,
  SALES_INITIALIZE,
  SALES_UPDATE,
  SALES_DELETE,
} from "./types";

const initialState = {
  sales: [],
};

export const salesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SALES_INITIALIZE:
      return {
        ...state,
        sales: action.payload,
      };

    default:
      return state;
  }
};
