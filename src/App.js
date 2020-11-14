import React, { useState, useEffect } from "react";

// import component
import Navbar from "./components/Navbar";
import InputRecipe from "./components/InputRecipe";
import ListRecipe from "./components/ListRecipe";

import "./App.css";

const App = () => {
  const APP_ID = process.env.REACT_APP_ID;
  const APP_KEY = process.env.REACT_APP_KEY;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=2`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const name = "YUYA";

  return (
    <div className="App">
      <div className="section navbar">
        <Navbar />
      </div>

      <div className="section header">
        <InputRecipe />
      </div>

      {recipes.map((recipe) => (
        <div className="section recipe">
          <ListRecipe me={name} title={recipe.recipe.label} />
        </div>
      ))}

      {/* {recipes.map(recipe => )} */}
    </div>
  );
};

export default App;
