import * as React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { iIngredients } from "../useCase/Recipe";

export interface CardRecipeProps {
  id: string;
  nameRecipe: string;
  deleteRecipe(id: string): void;
  costs: number;
  profits: number;
  price: number;
  taxes: number;
  ingredients: iIngredients;
  coin: string;
}

const CardRecipe: React.SFC<CardRecipeProps> = (props) => {
  const {
    nameRecipe,
    deleteRecipe,
    id,
    costs,
    profits,
    price,
    taxes,
    ingredients,
    coin,
  } = props;
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" color="initial">
          {nameRecipe}
        </Typography>
        <Typography variant="body2" color="initial">
          Costo: {costs} {coin}
        </Typography>
        <Typography variant="body2" color="initial">
          impuesto: {taxes} {coin}
        </Typography>
        <Typography variant="body2" color="initial">
          Ganancia: {profits} {coin}
        </Typography>
        <Typography variant="body2" color="initial">
          Precio de venta: {price} {coin}
        </Typography>

        {ingredients.length > 0 && (
          <TableContainer>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Ingrediente</TableCell>
                  <TableCell align="right">costo</TableCell>
                  <TableCell align="right">usado</TableCell>
                  <TableCell align="right">precio</TableCell>
                </TableRow>
              </TableHead>
              {ingredients.map((ingredient) => (
                <TableBody key={ingredient.id}>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {ingredient.nameIngredient}
                    </TableCell>
                    <TableCell align="right">{ingredient.costs}</TableCell>
                    <TableCell align="right">{ingredient.unitUsed}</TableCell>
                    <TableCell align="right">{ingredient.unitPrice}</TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </TableContainer>
        )}
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => deleteRecipe(id)}
        >
          borrar
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardRecipe;
