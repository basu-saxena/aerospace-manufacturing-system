import React from "react";
import { Button } from "./components/ui/button";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
