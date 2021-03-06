import React from "react";

//import css
import "../css/ListRecipe.css";

const ListRecipe = (props) => {
  // functions
  /* remove the detailed infromation of recipe ingredients (comes after ",") and return array contains 4 ingredients at most*/
  const displayArrOf4Ingredients = (arr) => {
    const arrOfIngredients = arr.map((ingredient) => ingredient.split(",")[0]);

    console.log(arrOfIngredients);

    const result =
      arrOfIngredients.length < 4
        ? arrOfIngredients
        : arrOfIngredients.slice(0, 4);

    return result;
  };

  return (
    <div className="recipe">
      <div className="recipe-image-container">
        <img src={props.image} alt="" className="recipe-image" />

        <div className="recipe-info">
          <p className="recipe-calories">CALORIES: {props.calories}</p>

          <p>INGREDIENTS</p>
          {displayArrOf4Ingredients(props.ingredients).map((ingredient) => (
            <p className="recipe-ingredients">{ingredient}</p>
          ))}
        </div>
      </div>

      <a className="recipe-link" href={props.recipeUrl}>
        {props.title}
      </a>
    </div>
  );
};

export default ListRecipe;
