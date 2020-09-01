import React from "react";
import { Provider } from "react-redux";

import store from "./redux";
import MyThemeProvider from "./useCase";

import RouterApp from "./router";

function App() {
  return (
    <Provider store={store}>
      <MyThemeProvider>
        <RouterApp />
      </MyThemeProvider>
    </Provider>
  );
}

export default App;
