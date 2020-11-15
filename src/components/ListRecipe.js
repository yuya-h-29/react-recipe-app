import React from "react";

//import css
import "../css/ListRecipe.css";

const ListRecipe = (props) => {
  return (
    <div className="recipe">
      <div className="recipe-image-container">
        <img src={props.image} alt="" className="recipe-image" />

        <div className="recipe-info">
          <p className="recipe-calories">CALORIES: {props.calories}</p>

          {/* remove the detailed infromation of recipe ingredients (comes after ",") and dispaly ingredients */}
          <p>INGREDIENTS</p>
          {props.ingredients.map((ingredient) => (
            <p className="recipe-ingredients">{ingredient.split(",")[0]}</p>
          ))}
        </div>
      </div>

      <a className="recipe-link" href={props.recipeUrl}>
        {props.title}
      </a>

      {/* <h3 id="recipe-title" onClick={() => {

      }}>{props.title}</h3> */}

      {/* <p>{props.ingredients}</p>
      <p>{props.calories}</p>
      <p>{props.recipeUrl}</p> */}
    </div>
  );
};

export default ListRecipe;
