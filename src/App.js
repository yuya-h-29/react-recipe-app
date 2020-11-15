import React, { useState, useEffect } from "react";

// import component
import Navbar from "./components/Navbar";
import InputRecipe from "./components/InputRecipe";
import ListRecipe from "./components/ListRecipe";

//import css
import "./App.css";

const App = () => {
  const APP_ID = process.env.REACT_APP_ID;
  const APP_KEY = process.env.REACT_APP_KEY;

  //States
  // for using damy data, put aaa and bb
  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState("");

  const [query, setQuery] = useState("meat");

  useEffect(() => {
    getRecipes();
  }, [query]);

  // functions
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=2`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = () => {
    setQuery(search);

    //cannot clear the text field
    // setSearch("");
    console.log(search);
  };

  // dummy data
  const dimgurl =
    "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg";
  const dtitle = "Chicken Paprikash";

  const dcal = "2222222";
  const ding = [
    "1/2 cup olive oil",
    "5 cloves garlic, peeled",
    "2 large russet potatoes, peeled and cut into chunks",
    "1 3-4 pound chicken, cut into 8 pieces",
  ];
  const dlink =
    "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html";

  return (
    <div className="App">
      <div className="section navbar-container">
        <Navbar />
      </div>

      <div className="section header-container">
        <InputRecipe updateSearch={updateSearch} getSearch={getSearch} />
      </div>

      {recipes.map((recipe) => (
        <div className="section recipe-container">
          <ListRecipe
            // key={recipe.recipe.label}
            // title={dtitle}
            // image={dimgurl}
            // calories={dcal}
            // ingredients={ding}
            // recipeUrl={dlink}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredientLines}
            recipeUrl={recipe.recipe.url}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
