import React, { useState } from "react";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import { iIngredient } from "../useCase/Recipe";
import Typography from "@material-ui/core/Typography";

export interface AddIngredientProps {
  onSubmit(e: any, ingredient: iIngredient): void;
  coin: string;
}

const initialIngredient: iIngredient = {
  id: "",
  nameIngredient: "",
  unit: "",
  unitPrice: 0,
  unitUsed: 0,
  costs: 0,
};

const AddIngredient: React.FC<AddIngredientProps> = (props) => {
  const { onSubmit, coin } = props;

  const [ingredient, setIngredient] = useState<iIngredient>(initialIngredient);

  const onChange = (e: any, name: string) => {
    let newIngredient = { ...ingredient, [name]: e.target.value };
    setIngredient(newIngredient);
  };

  const handleOnSubmit = (e: any, ingredient: iIngredient) => {
    onSubmit(e, ingredient);
    setIngredient(initialIngredient);
  };

  return (
    <>
      <Typography variant="body2" color="initial">
        Agrega un ingrediente
      </Typography>
      <TextField
        margin="normal"
        id="nameIngredient"
        label={"Nombre del ingrediente"}
        name="nameIngredient"
        variant="outlined"
        value={ingredient.nameIngredient}
        onChange={(e: any) => onChange(e, "nameIngredient")}
        fullWidth
      />
      <TextField
        margin="normal"
        id="unit"
        label={"Unidad del producto al ser comprado (kg, g, docena)"}
        name="unit"
        variant="outlined"
        value={ingredient.unit}
        onChange={(e: any) => onChange(e, "unit")}
        fullWidth
      />
      <TextField
        margin="normal"
        id="unitPrice"
        label={`Precio de compra de la unidad (en ${coin})`}
        name="unitPrice"
        variant="outlined"
        fullWidth
        type="number"
        value={ingredient.unitPrice}
        onChange={(e: any) => onChange(e, "unitPrice")}
      />
      <TextField
        margin="normal"
        id="unitUsed"
        label={"Uso de la unida"}
        name="unitUsed"
        variant="outlined"
        fullWidth
        type="number"
        value={ingredient.unitUsed}
        onChange={(e: any) => onChange(e, "unitUsed")}
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={(e) => handleOnSubmit(e, ingredient)}
      >
        Agregar ingrediente
      </Button>
    </>
  );
};

export default AddIngredient;
