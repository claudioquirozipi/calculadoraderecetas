import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import Layout from "../components/Layout";
import { useRecipe } from "../useCase/Recipe";
import { useConfig } from "../useCase/Config";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CardSalesRecipe from "../components/CardSalesRecipe";
import Grid from "@material-ui/core/Grid";
import { Doughnut } from "react-chartjs-2";
import { useTheme } from "@material-ui/core/styles";
import { round } from "../global/function";
import { SALES_INITIALIZE } from "../redux/sales/types";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const { Recipes, updateSalesRecipe, financialSummary } = useRecipe();
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.salesReducer);
  const redu = useSelector((state: any) => state.recipesReducer.recipes);
  console.log("c", counter);
  const { coin } = useConfig();
  const theme = useTheme();
  const [chartData, setChartData] = useState({
    labels: ["Ganancias", "Egresos", "Ingresos"],
    datasets: [
      {
        label: coin,
        data: [
          financialSummary.summaryProfits,
          financialSummary.summaryExpenses,
          financialSummary.summaryIncome,
        ],
        backgroundColor: [
          theme.palette.success.main,
          theme.palette.error.main,
          theme.palette.secondary.main,
        ],
      },
    ],
  });

  useEffect(() => {
    let newChartData = { ...chartData };
    newChartData.datasets[0].data = [
      financialSummary.summaryProfits,
      financialSummary.summaryExpenses,
      financialSummary.summaryIncome,
    ];
    setChartData(newChartData);
  }, [Recipes]);

  useEffect(() => {
    console.log("aquí", redu);
    dispatch({ type: SALES_INITIALIZE, payload: redu });
  }, []);

  return (
    <Layout>
      <Grid container spacing={8}>
        <Grid item xs={12} md={6}>
          <Box my={4}>
            <Typography variant="h3" color="secondary">
              Ganancias: {round(financialSummary.summaryProfits)} {coin}
            </Typography>
            <Typography variant="h3" color="secondary">
              Egresos: {round(financialSummary.summaryExpenses)} {coin}
            </Typography>
            <Typography variant="h3" color="secondary">
              Ingresos: {round(financialSummary.summaryIncome)} {coin}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Doughnut data={chartData} />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {Recipes.length > 0 &&
          Recipes.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe.id}>
              <CardSalesRecipe
                key={recipe.id}
                recipe={recipe}
                totalProfit={round(recipe.totalProfit)}
                totalIncome={round(recipe.totalIncome)}
                nameRecipe={recipe.nameRecipe}
                updateSalesRecipe={updateSalesRecipe}
                coin={coin}
              />
            </Grid>
          ))}
      </Grid>
    </Layout>
  );
};

export default Home;
