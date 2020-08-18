import React, { useState, useCallback, useEffect } from "react";

import { RECIPES } from "../../config/constants";
import store from "store";

interface RecipeContextData {
  Recipes: iRecipes;
  createRecipe(e: any): void;
  deleteRecipe(id: string): void;
  updateSalesRecipe(id: string, sales: number): void;
  financialSummary: iFinancialSummary;
}

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

interface iFinancialSummary {
  summaryProfits: number;
  summaryIncome: number;
  summaryExpenses: number;
}

interface RecipeContextProps {}

const RecipeContext = React.createContext({} as RecipeContextData);

const RecipeProvider: React.FC<RecipeContextProps> = (props) => {
  const { children } = props;
  const initialRecipes: iRecipes = store.get(RECIPES) || [];
  const [Recipes, setRecipes] = useState<iRecipes>(initialRecipes);
  const [financialSummary, setFinancialSummary] = useState<iFinancialSummary>({
    summaryProfits: 0,
    summaryIncome: 0,
    summaryExpenses: 0,
  });

  const order = (recipes: iRecipes) => {
    recipes.sort((a, b) => {
      if (a.nameRecipe > b.nameRecipe) {
        return 1;
      }
      if (a.nameRecipe < b.nameRecipe) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    return recipes;
  };
  const createRecipe = useCallback(
    async (recipe: iRecipe) => {
      recipe.sales = 0;
      recipe.totalProfit = 0;
      recipe.totalIncome = 0;
      const newRecipes: iRecipes = [...Recipes, recipe];
      setRecipes(order(newRecipes));
      store.set(RECIPES, order(newRecipes));
    },
    [Recipes]
  );

  const updateRecipe = useCallback(async (payload) => {}, []);

  const updateSalesRecipe = useCallback(
    async (id: string, sales: number) => {
      const newRecipes = Recipes.filter((recipe) => recipe.id !== id);
      let newRecipe = Recipes.find((recipe) => recipe.id === id);
      if (newRecipe) {
        newRecipe.sales = sales || 0;
        newRecipe.totalIncome = sales * newRecipe.price || 0;
        newRecipe.totalProfit = sales * newRecipe.profits || 0;
        setRecipes(order([...newRecipes, newRecipe]));
        store.set(RECIPES, order([...newRecipes, newRecipe]));
      }
    },
    [Recipes]
  );

  const deleteRecipe = useCallback(
    async (id) => {
      const newRecipes: iRecipes = Recipes.filter((recipe) => recipe.id !== id);
      setRecipes(order(newRecipes));
      store.set(RECIPES, order(newRecipes));
    },
    [Recipes]
  );

  useEffect(() => {
    const summaryIncome = Recipes.reduce((acc, recipe) => {
      return acc + recipe.totalIncome;
    }, 0);
    const summaryProfits = Recipes.reduce((acc, recipe) => {
      return acc + recipe.totalProfit;
    }, 0);
    let newFinancialSummary = { ...financialSummary };
    newFinancialSummary.summaryIncome = Math.round(summaryIncome);
    newFinancialSummary.summaryProfits = Math.round(summaryProfits);
    newFinancialSummary.summaryExpenses = Math.round(
      summaryIncome - summaryProfits
    );
    setFinancialSummary(newFinancialSummary);
  }, [Recipes]);

  return (
    <RecipeContext.Provider
      value={{
        Recipes,
        createRecipe,
        deleteRecipe,
        updateSalesRecipe,
        financialSummary,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

function useRecipe(): RecipeContextData {
  const context = React.useContext(RecipeContext);

  if (!context) {
    throw new Error("useRecipe error");
  }
  return context;
}

export { RecipeProvider, useRecipe };
