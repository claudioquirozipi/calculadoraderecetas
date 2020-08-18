import * as React from "react";

import Layout from "../components/Layout";
import { useRecipe } from "../useCase/Recipe";
import Typography from "@material-ui/core/Typography";
import CardRecipe from "../components/CardRecipe";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useConfig } from "../useCase/Config";

export interface RecipesProps {}

const Recipes: React.FC<RecipesProps> = () => {
  const { Recipes, deleteRecipe } = useRecipe();
  const { coin } = useConfig();
  const history = useHistory();

  return (
    <Layout>
      <Box my={4}>
        <Typography variant="h3" color="secondary">
          Lista de recetas
        </Typography>
      </Box>
      <Grid container spacing={1}>
        {Recipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} key={recipe.id}>
            <CardRecipe
              key={recipe.id}
              id={recipe.id}
              nameRecipe={recipe.nameRecipe}
              costs={recipe.costs}
              profits={recipe.profits}
              price={recipe.price}
              taxes={recipe.taxes}
              ingredients={recipe.ingredients}
              deleteRecipe={deleteRecipe}
              coin={coin}
            />
          </Grid>
        ))}
      </Grid>
      <Box my={4}>
        <Grid container spacing={1} justify="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/recipe/create")}
          >
            Crear receta
          </Button>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Recipes;
