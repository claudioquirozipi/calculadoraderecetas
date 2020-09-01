import * as React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { pink, indigo } from "@material-ui/core/colors";

export interface MyThemeProviderProps {}
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#A3EB86",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FFD0B2",
      contrastText: "#fff",
    },
    background: {
      default: "#FAF9CE",
    },
  },
});

const MyThemeProvider: React.FC<MyThemeProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MyThemeProvider;
