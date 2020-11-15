import React from "react";

//import css
import "../css/InputRecipe.css";

const InputRecipe = (props) => {
  return (
    <div className="header">
      <h1 className="header-title">BRING DELICIOUS FOOD RECIPES</h1>
      <form className="search-form" action="">
        <input
          className="search-bar"
          type="text"
          placeholder="Ingredient"
          onChange={props.updateSearch}
        />
        <button
          className="search-button"
          type="button"
          onClick={props.getSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default InputRecipe;
