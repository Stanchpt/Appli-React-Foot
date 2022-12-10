import React from "react";

interface IGlobalContext {
  count: number;
  incrementCount: () => void;
}

const GlobalContext = React.createContext<IGlobalContext>({} as IGlobalContext);

export const useGlobalContext = () => React.useContext(GlobalContext);

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [count, setCount] = React.useState<number>(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <GlobalContext.Provider value={{ count, incrementCount }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
