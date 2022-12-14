import React from "react";
import { BrowserRouter } from "react-router-dom";
import Content from "./components/organisms/Content";
import Header from "./components/organisms/Header";

const App = () => {
  return (
      <BrowserRouter>
        <Header />
        <Content />
      </BrowserRouter>
  );
};

export default App;
