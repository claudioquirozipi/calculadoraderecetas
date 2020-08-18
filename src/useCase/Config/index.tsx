import React, { useState } from "react";

interface ConfigContextData {
  coin: string;
  setCoin(coin: string): void;
}

interface ConfigContextProps {}

const ConfigContext = React.createContext({} as ConfigContextData);

const ConfigProvider: React.FC<ConfigContextProps> = (props) => {
  const { children } = props;
  const [coin, setCoin] = useState("$");

  return (
    <ConfigContext.Provider
      value={{
        coin,
        setCoin,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

function useConfig(): ConfigContextData {
  const context = React.useContext(ConfigContext);

  if (!context) {
    throw new Error("useConfig error");
  }
  return context;
}

export { ConfigProvider, useConfig };
