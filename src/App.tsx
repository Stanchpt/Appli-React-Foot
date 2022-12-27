import React from "react";
import { BrowserRouter } from "react-router-dom";
import Content from "./components/organisms/Content";
import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";

const App = () => {
  return (
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
  );
};

export default App;
