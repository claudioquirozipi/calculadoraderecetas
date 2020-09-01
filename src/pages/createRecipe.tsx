import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RECIPES_CREATE } from "../redux/recipes/types";

import Layout from "../components/Layout";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import AddIngredient from "../components/AddIngredient";

import { iRecipe, iIngredients, iIngredient } from "../redux/recipes/interface";

import ListIngredients from "../components/Listingredients";
import { round } from "../global/function";
import Divider from "@material-ui/core/Divider";
import AddRecipe from "../components/AddRecipe";

const useStyle = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(3, 0),
  },
  input: {
    margin: theme.spacing(1, 0),
  },
  table: {
    minWidth: 650,
  },
}));

export interface CreateRecipeProps {}

const CreateRecipe: React.FC<CreateRecipeProps> = () => {
  const classes = useStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const coin = useSelector((state: any) => state.configReducer.config.coin);
  const [open, setOpen] = useState(false);
  const [recipe, setRecipe] = useState<iRecipe>({
    id: uuidv4(),
    nameRecipe: "",
    ingredients: [],
    costs: 0,
  });
  const [ingredients, setIngredients] = useState<iIngredients>([]);

  const createRecipeSubmit = (e: any) => {
    e.preventDefault();
    dispatch({ type: RECIPES_CREATE, payload: recipe });
    history.push("/recipe/list");
  };

  const handleAddIngredient = (e: any, ingredient: iIngredient) => {
    e.preventDefault();
    const newIngredient: iIngredient = {
      id: uuidv4(),
      nameIngredient: ingredient.nameIngredient,
      unit: ingredient.unit,
      unitPrice: round(ingredient.unitPrice),
      unitUsed: round(ingredient.unitUsed),
      costs: round(ingredient.unitPrice * ingredient.unitUsed),
    };
    const newIngredients: iIngredients = [newIngredient, ...ingredients];
    setIngredients(newIngredients);
    handleClose();
  };

  const deleteIngredient = (id: string) => {
    const newIngredients: iIngredients = ingredients.filter(
      (ingredient) => ingredient.id !== id
    );
    setIngredients(newIngredients);
  };

  const onChange = (e: any, name: string) => {
    let newRecipe = { ...recipe, [name]: e.target.value };
    setRecipe(newRecipe);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let newRecipe = { ...recipe };
    newRecipe.ingredients = [...ingredients];
    const costs = ingredients.reduce((a, b) => {
      return a + b.costs;
    }, 0);
    newRecipe.costs = costs;
    setRecipe(newRecipe);
  }, [ingredients]);

  return (
    <Layout>
      <Typography
        variant="h3"
        color="primary"
        align="center"
        className={classes.title}
      >
        Crear receta
      </Typography>

      <AddIngredient
        onSubmit={handleAddIngredient}
        coin={coin}
        open={open}
        onClouse={handleClose}
      />
      <Grid container justify="center" spacing={1}>
        <Grid item xs={12} md={5}>
          <AddRecipe
            createRecipeSubmit={createRecipeSubmit}
            nameRecipeValue={recipe.nameRecipe}
            nameRecipeOnChange={(e: any) => onChange(e, "nameRecipe")}
            costsRecipeValue={recipe.costs}
            ingredients={ingredients}
            onOpen={handleOpen}
            coin={coin}
            deleteIngredient={deleteIngredient}
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default CreateRecipe;
