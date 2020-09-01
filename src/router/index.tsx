import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import Recipes from "../pages/recipes";
import CreateRecipe from "../pages/createRecipe";
import Test from "../pages/test";

export interface RouterAppProps {}

const RouterApp: React.FC<RouterAppProps> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipe/list" component={Recipes} />
        <Route exact path="/recipe/create" component={CreateRecipe} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </Router>
  );
};

export default RouterApp;
