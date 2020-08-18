import * as React from "react";

import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  wrapper: {},
  link: {
    color: "#fff",
    marginLeft: theme.spacing(2),
  },
}));

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justify="flex-end">
          <Link component={RouterLink} className={classes.link} to="/">
            Ventas
          </Link>
          <Link
            component={RouterLink}
            className={classes.link}
            to="/recipe/list"
          >
            Recetas
          </Link>
          <Link
            component={RouterLink}
            className={classes.link}
            to="/recipe/create"
          >
            Crear
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
