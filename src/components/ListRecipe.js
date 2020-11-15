import React from "react";

const ListRecipe = (props) => {
  return (
    <div className="recipe">
      <img src={props.image} alt="" />
      {/* <h1>{props.title}</h1> */}
      {/* <p>{props.ingredients}</p>
      
      <p>{props.calories}</p>
      <p>{props.recipeUrl}</p> */}
    </div>
  );
};

export default ListRecipe;
