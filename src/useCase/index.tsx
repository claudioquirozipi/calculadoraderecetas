import * as React from "react";

import { RecipeProvider } from "./Recipe";
import { ConfigProvider } from "./Config";
import MyThemeProvider from "./useTheme";

export interface ProviderContainerProps {
  children: any;
}

const ProviderContainer: React.FC<ProviderContainerProps> = (props) => {
  const { children } = props;
  return (
    <RecipeProvider>
      <ConfigProvider>
        <MyThemeProvider>
          <div>{children}</div>
        </MyThemeProvider>
      </ConfigProvider>
    </RecipeProvider>
  );
};

export default ProviderContainer;
