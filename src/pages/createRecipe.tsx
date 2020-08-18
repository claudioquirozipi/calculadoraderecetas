import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";

import Layout from "../components/Layout";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import AddIngredient from "../components/AddIngredient";

import {
  iRecipe,
  iIngredients,
  iIngredient,
  useRecipe,
} from "../useCase/Recipe";
import { useConfig } from "../useCase/Config";
import ListIngredients from "../components/Listingredients";
import { round } from "../global/function";
import Divider from "@material-ui/core/Divider";

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
  const { createRecipe } = useRecipe();
  const { coin, setCoin } = useConfig();
  const [taxes, setTaxes] = useState(12);
  const [recipe, setRecipe] = useState<iRecipe>({
    id: uuidv4(),
    nameRecipe: "",
    ingredients: [],
    costs: 0,
    taxes: 0,
    profits: 0,
    price: 0,
    sales: 0,
    totalIncome: 0,
    totalProfit: 0,
  });
  const [ingredients, setIngredients] = useState<any[]>([]);

  const createRecipeSubmit = (e: any) => {
    e.preventDefault();
    createRecipe(recipe);
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

  useEffect(() => {
    let newRecipe = { ...recipe };
    newRecipe.ingredients = [...ingredients];
    newRecipe.taxes = round((newRecipe.price * taxes) / 100);
    const costs = ingredients.reduce((a, b) => {
      return a + b.costs;
    }, 0);
    newRecipe.costs = costs;
    newRecipe.profits = round(
      recipe.price - costs - (newRecipe.price * taxes) / 100
    );
    setRecipe(newRecipe);
  }, [ingredients, taxes, recipe.price]);

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
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <Paper>
            <Box px={2} py={4} mb={2}>
              <form onSubmit={createRecipeSubmit}>
                <Typography variant="h4" color="initial">
                  Agregar receta
                </Typography>
                <TextField
                  className={classes.input}
                  id="nameRecipe"
                  label={"Nombre de la receta"}
                  name="nameRecipe"
                  variant="outlined"
                  fullWidth
                  value={recipe.nameRecipe}
                  onChange={(e: any) => onChange(e, "nameRecipe")}
                />
                <TextField
                  className={classes.input}
                  id="coin"
                  label={"Moneda"}
                  name="coin"
                  variant="outlined"
                  fullWidth
                  value={coin}
                  onChange={(e: any) => setCoin(e.target.value)}
                />
                <TextField
                  className={classes.input}
                  id="taxes"
                  label={"inpuesto en porcentaje (%)"}
                  name="taxes"
                  variant="outlined"
                  fullWidth
                  type="number"
                  value={taxes}
                  onChange={(e: any) => setTaxes(e.target.value)}
                />
                <Box my={2}>
                  <Divider color="primary" />
                </Box>
                <AddIngredient onSubmit={handleAddIngredient} coin={coin} />
                <Box my={2}>
                  <Divider color="primary" />
                </Box>
                <TextField
                  className={classes.input}
                  id="price"
                  label={"Precio de venta"}
                  name="price"
                  variant="outlined"
                  fullWidth
                  type="number"
                  value={recipe.price}
                  onChange={(e: any) => onChange(e, "price")}
                />

                <Button variant="contained" color="primary" type="submit">
                  Agregrar Receta
                </Button>
              </form>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>
            <Box px={2} py={4}>
              <Typography variant="h5" color="textSecondary">
                {recipe.nameRecipe || "Nombre de la receta"}
              </Typography>
            </Box>
            <Box px={2} py={1}>
              <Typography variant="h5" color="textSecondary">
                {`Costo: ${recipe.costs} ${coin}`}
              </Typography>
            </Box>
            <Box px={2} py={1}>
              <Typography variant="h5" color="textSecondary">
                {`Iva: ${recipe.taxes} ${coin}`}
              </Typography>
            </Box>
            <Box px={2} py={1}>
              <Typography variant="h5" color="textSecondary">
                {`Ganancia: ${recipe.profits} ${coin}`}
              </Typography>
            </Box>
            <Box px={2} py={1}>
              <Typography variant="h5" color="textSecondary">
                {`Precio de venta: ${recipe.price} ${coin}`}
              </Typography>
            </Box>
            <ListIngredients
              ingredients={ingredients}
              coin={coin}
              delete={deleteIngredient}
            />
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default CreateRecipe;
