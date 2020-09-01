import React, { useState } from "react";

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
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";

export interface ListIngredientsProps {
  ingredients: iIngredients;
  coin: string;
  deleteIngredient: (id: string) => void;
}

const ListIngredients: React.FC<ListIngredientsProps> = (props) => {
  const { ingredients, coin, deleteIngredient } = props;
  const [viewDelete, setViewDelete] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const onDelete1 = (id: string) => {
    setDeleteId(id);
    setViewDelete(true);
  };

  const onDelete2 = () => {
    deleteIngredient(deleteId);
    setViewDelete(false);
  };

  return ingredients.length > 0 ? (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ingrediente</TableCell>
            <TableCell align="right">Precio de compra</TableCell>
            <TableCell align="right">Unidad utilizada</TableCell>
            <TableCell align="right">Editar</TableCell>
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
              <TableCell align="right">
                <IconButton
                  aria-label="delete"
                  onClick={() => alert("Proximamente")}
                >
                  <EditIcon />
                </IconButton>
              </TableCell>
              <TableCell align="right">
                <IconButton
                  aria-label="delete"
                  onClick={() => onDelete1(ingredient.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={viewDelete} onClose={() => setViewDelete(false)}>
        <DialogTitle style={{ cursor: "move" }}>Borrar ingrediente</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Está seguro que desea borrar este ingrediente ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setViewDelete(false)}
            color="primary"
            variant="outlined"
          >
            No
          </Button>
          <Button
            autoFocus
            onClick={onDelete2}
            color="primary"
            variant="contained"
          >
            Sí
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  ) : (
    <Box p={2} />
  );
};

export default ListIngredients;
