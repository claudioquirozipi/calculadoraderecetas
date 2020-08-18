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
      main: pink[100],
      contrastText: "#fff",
    },
    secondary: {
      main: indigo[900],
      contrastText: "#fff",
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
