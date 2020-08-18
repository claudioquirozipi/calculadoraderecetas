import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import Recipes from "../pages/recipes";
import CreateRecipe from "../pages/createRecipe";

export interface RouterAppProps {}

const RouterApp: React.FC<RouterAppProps> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipe/list" component={Recipes} />
        <Route exact path="/recipe/create" component={CreateRecipe} />
      </Switch>
    </Router>
  );
};

export default RouterApp;
