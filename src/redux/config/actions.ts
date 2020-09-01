import { iRecipe } from "./interface";
import { RECIPES_CREATE } from "./types";

export const recipesCreateAction = (payload: iRecipe) => ({
  type: RECIPES_CREATE,
  payload,
});
