import * as React from "react";

import { iIngredients, iIngredient } from "../useCase/Recipe";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

export interface ListIngredientsProps {
  ingredients: iIngredients;
  coin: string;
  delete: (id: string) => void;
}

const ListIngredients: React.FC<ListIngredientsProps> = (props) => {
  const { ingredients, coin } = props;

  return ingredients.length > 0 ? (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ingrediente</TableCell>
            <TableCell align="right">Precio por unidad</TableCell>
            <TableCell align="right">Unidad utilizada</TableCell>
            <TableCell align="right">Costo por producto</TableCell>
            <TableCell align="right">Borrar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ingredients.map((ingredient: iIngredient, i: number) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {ingredient.nameIngredient}
              </TableCell>
              <TableCell align="right">{`${ingredient.unitPrice} ${coin}/${ingredient.unit}`}</TableCell>
              <TableCell align="right">{`${ingredient.unitUsed} ${ingredient.unit}`}</TableCell>
              <TableCell align="right">{`${ingredient.costs} ${coin}`}</TableCell>
              <TableCell align="right">
                <IconButton
                  aria-label="delete"
                  onClick={() => props.delete(ingredient.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <Box px={2} py={4}>
      <Typography variant="h5" color="textSecondary">
        Agrega un ingrediente
      </Typography>
    </Box>
  );
};

export default ListIngredients;
