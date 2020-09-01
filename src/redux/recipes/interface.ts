export interface iRecipes extends Array<iRecipe> {}
export interface iRecipe {
  id: string;
  nameRecipe: string;
  costs: number;
  ingredients: iIngredients;
}
export interface iIngredients extends Array<iIngredient> {}
export interface iIngredient {
  id: string;
  nameIngredient: string;
  unit: string;
  unitPrice: number;
  unitUsed: number;
  costs: number;
}
