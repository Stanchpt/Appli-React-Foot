import React from "react";
import { BrowserRouter } from "react-router-dom";
import Content from "./components/organisms/Content";
import Header from "./components/organisms/Header";
import GlobalContextProvider from "./contexts/GlobalContext";

const App = () => {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Header />
        <Content />
      </BrowserRouter>
    </GlobalContextProvider>
  );
};

export default App;
