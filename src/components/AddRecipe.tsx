import * as React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ListIngredients from "./Listingredients";
import Typography from "@material-ui/core/Typography";

export interface AddRecipeProps {
  createRecipeSubmit: any;
  nameRecipeValue: string;
  costsRecipeValue: number;
  nameRecipeOnChange: any;
  ingredients: any;
  onOpen: any;
  coin: string;
  deleteIngredient: any;
}

const AddRecipe: React.FC<AddRecipeProps> = (props) => {
  const {
    createRecipeSubmit,
    nameRecipeValue,
    nameRecipeOnChange,
    costsRecipeValue,
    ingredients,
    onOpen,
    coin,
    deleteIngredient,
  } = props;
  return (
    <Paper>
      <Box px={2} py={4} mb={2}>
        <form onSubmit={createRecipeSubmit}>
          <TextField
            margin="normal"
            id="nameRecipe"
            label={"Nombre de la receta"}
            name="nameRecipe"
            variant="standard"
            fullWidth
            value={nameRecipeValue}
            onChange={nameRecipeOnChange}
          />
          <Box px={2} py={1}>
            <Typography variant="h5" color="textSecondary">
              {`Costo: ${costsRecipeValue} ${coin}`}
            </Typography>
          </Box>

          <Button
            variant={ingredients.length === 0 ? "contained" : "outlined"}
            color={"secondary"}
            onClick={onOpen}
            fullWidth
            size="large"
          >
            Agregar ingrediente
          </Button>
          <ListIngredients
            ingredients={ingredients}
            coin={coin}
            deleteIngredient={deleteIngredient}
          />

          <Button
            variant={"contained"}
            color="primary"
            type="submit"
            fullWidth
            size="large"
            disabled={ingredients.length === 0 || nameRecipeValue === ""}
          >
            Agregrar Receta
          </Button>
        </form>
      </Box>
    </Paper>
  );
};

export default AddRecipe;
