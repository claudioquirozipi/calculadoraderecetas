import * as React from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: theme.spacing(4, 0),
    display: "flex",
    justifyContent: "center",
  },
}));

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Button
        variant="text"
        color="secondary"
        onClick={() => window.open("https://cquirozipi.firebaseapp.com/")}
      >
        Desarrollado por Claudio Quiroz
      </Button>
    </div>
  );
};

export default Footer;
