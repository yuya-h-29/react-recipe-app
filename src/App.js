import React, { useState, useEffect } from "react";

// import component
import Navbar from "./components/Navbar";
import InputRecipe from "./components/InputRecipe";
import ListRecipe from "./components/ListRecipe";

import "./App.css";

const App = () => {
  const APP_ID = process.env.REACT_APP_ID;
  const APP_KEY = process.env.REACT_APP_KEY;

  // for using damy data, put aaa and bbb
  const [recipes, setRecipes] = useState(["AAA", "BBB"]);

  useEffect(() => {
    // getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=2`
    );
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits);
  };

  const dimgurl =
    "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg";
  const dtitle = "Chicken Paprikash";

  return (
    <div className="App">
      <div className="section navbar-container">
        <Navbar />
      </div>

      <div className="section header-container">
        <InputRecipe />
      </div>

      {recipes.map((recipe) => (
        <div className="section recipe-container">
          <ListRecipe
            title={dtitle}
            image={dimgurl}
            // title={recipe.recipe.label}
            // ingredients={recipe.recipe.ingredientLines}
            // recipeUrl={recipe.recipe.url}
            // calories={recipe.recipe.calories}
            // image={recipe.recipe.image}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
