import React from "react";

//import css
import "../css/InputRecipe.css";

const InputRecipe = () => {
  return (
    <div className="header">
      <h1 className="header-title">あなただけのレシピを見つけよう</h1>
      <form className="search-form" action="">
        <input className="search-bar" type="text" placeholder="レシピを検索" />
        <button className="search-button" type="submit">
          さがす
        </button>
      </form>
    </div>
  );
};

export default InputRecipe;
