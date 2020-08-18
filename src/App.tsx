import React from "react";

import MyThemeProvider from "./useCase";

import RouterApp from "./router";

function App() {
  return (
    <MyThemeProvider>
      <RouterApp />
    </MyThemeProvider>
  );
}

export default App;
