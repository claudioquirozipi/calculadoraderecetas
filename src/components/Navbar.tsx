import React, { useState } from "react";

import { Link as RouterLink, useHistory } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import logo from "../image/logo.svg";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import ListSubheader from "@material-ui/core/ListSubheader";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import CakeIcon from "@material-ui/icons/Cake";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

const useStyles = makeStyles((theme) => ({
  wrapper: {},
  link: {
    color: "#fff",
    marginLeft: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  iconMenu: {
    color: theme.palette.primary.contrastText,
  },
  drawer: {
    width: theme.spacing(30),
  },
}));

export interface NavbarProps {}

function ListItemLink(props: any) {
  return <ListItem button component="a" {...props} />;
}

const Navbar: React.FC<NavbarProps> = () => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item container spacing={2} xs={8} alignItems="center">
            <Grid item>
              <img
                src={logo}
                alt="Tu gerente de cocina"
                className={classes.avatar}
              />
            </Grid>
            <Grid item>
              <Typography variant="h4" color="initial">
                Tu gerente de cocina
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon className={classes.iconMenu} />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
      <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
        <List
          component="nav"
          aria-label="main mailbox folders"
          className={classes.drawer}
        >
          <ListSubheader>titulos</ListSubheader>
          <Divider />

          <ListItem button onClick={() => history.push("/recipe/list")}>
            <ListItemIcon>
              <CakeIcon />
            </ListItemIcon>
            <ListItemText primary="Recetas" />
          </ListItem>
          <ListItem button onClick={() => history.push("/recipe/list")}>
            <ListItemIcon>
              <LocalBarIcon />
            </ListItemIcon>
            <ListItemText primary="Productos" />
          </ListItem>
          <ListItem button onClick={() => history.push("/recipe/list")}>
            <ListItemIcon>
              <FastfoodIcon />
            </ListItemIcon>
            <ListItemText primary="Combos" />
          </ListItem>
        </List>
        <Divider />

        <List component="nav" aria-label="secondary mailbox folders">
          <ListItem button onClick={() => history.push("/ventas")}>
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Ventas" />
          </ListItem>
          {/* <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItemLink href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItemLink> */}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
