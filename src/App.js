import React from "react";

// import component
import Navbar from "./components/Navbar";
import InputRecipe from "./components/InputRecipe";
import ListRecipe from "./components/ListRecipe";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="section navbar">
        <Navbar />
      </div>

      <div className="section header">
        <InputRecipe />
      </div>

      <div className="section recipe">
        <ListRecipe />
      </div>
      <div className="section recipe">
        <ListRecipe />
      </div>
      <div className="section recipe">
        <ListRecipe />
      </div>
      <div className="section recipe">
        <ListRecipe />
      </div>
      <div className="section recipe">
        <ListRecipe />
      </div>
      <div className="section recipe">
        <ListRecipe />
      </div>
    </div>
  );
};

export default App;
