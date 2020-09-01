import {
  RECIPES_READ,
  RECIPES_CREATE,
  RECIPES_UPDATE,
  RECIPES_DELETE,
} from "./types";

import { iRecipes } from "./interface";

const initialState = {
  recipes: [],
};

export const recipesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case RECIPES_CREATE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };

    default:
      return state;
  }
};
