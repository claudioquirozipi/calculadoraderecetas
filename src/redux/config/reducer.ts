import {
  RECIPES_READ,
  RECIPES_CREATE,
  RECIPES_UPDATE,
  RECIPES_DELETE,
} from "./types";

import { iRecipes } from "./interface";

const initialState = {
  config: {
    coin: "Bs",
  },
};

export const configReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
