import React from "react";

//import css
import "../css/ListRecipe.css";

const ListRecipe = (props) => {
  return (
    <div className="recipe">
      <img src={props.image} alt="" />
      <h3 id="recipe-title">{props.title}</h3>

      {/* <p>{props.ingredients}</p>

      
      
      <p>{props.calories}</p>
      <p>{props.recipeUrl}</p> */}
    </div>
  );
};

export default ListRecipe;
