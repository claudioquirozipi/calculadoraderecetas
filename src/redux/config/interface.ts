export interface iRecipes extends Array<iRecipe> {}
export interface iRecipe {
  id: string;
  nameRecipe: string;
  costs: number;
  taxes: number;
  profits: number;
  price: number;
  ingredients: iIngredients;
  sales: number;
  totalProfit: number;
  totalIncome: number;
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
