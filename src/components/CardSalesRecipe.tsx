import React from "react";
import { Doughnut } from "react-chartjs-2";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { iRecipe } from "../useCase/Recipe";
import { round } from "../global/function";

export interface CardSalesRecipeProps {
  nameRecipe: string;
  updateSalesRecipe(id: string, sales: number): void;
  totalProfit: number;
  totalIncome: number;
  recipe: iRecipe;
  coin: string;
}

const CardSalesRecipe: React.FC<CardSalesRecipeProps> = (props) => {
  const {
    nameRecipe,
    updateSalesRecipe,
    totalProfit,
    totalIncome,
    recipe,
    coin,
  } = props;
  const theme = useTheme();

  const onChangeSales = (event: any, newValue: number | number[]) => {
    updateSalesRecipe(recipe.id, newValue as number);
  };

  const chartData = {
    labels: ["Ganancias", "Egresos", "Ingresos"],
    datasets: [
      {
        label: coin,
        data: [totalProfit, totalIncome - totalProfit, totalIncome],
        backgroundColor: [
          theme.palette.success.main,
          theme.palette.error.main,
          theme.palette.secondary.main,
        ],
      },
    ],
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6" color="secondary">
              {nameRecipe}
            </Typography>
            <Typography variant="body1" color="initial">
              Ventas: {recipe.sales}
            </Typography>
            <Typography variant="body1" color="initial">
              costos: {round(totalIncome - totalProfit)} {coin}
            </Typography>
            <Typography variant="body1" color="initial">
              Ganancias: {totalProfit} {coin}
            </Typography>
            <Typography variant="body1" color="initial">
              Ingreso total: {totalIncome} {coin}
            </Typography>
          </Grid>
          <Grid item xs={6} container justify="center" alignItems="center">
            <Doughnut
              data={chartData}
              options={{
                legend: {
                  display: false,
                },
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
      <Box px={2}>
        <CardActions>
          <Slider
            value={recipe.sales}
            onChange={onChangeSales}
            min={0}
            max={100}
            valueLabelDisplay="auto"
            defaultValue={recipe.sales}
          />
        </CardActions>
      </Box>
    </Card>
  );
};

export default CardSalesRecipe;
