import React from "react";

const ListRecipe = (props) => {
  return (
    <div className="recipe-container">
      {/* <h1>{props.recipes}</h1> */}
      <h1>{props.title}</h1>
      {console.log("trigered")}
      {console.log(props.title)}
      <h2>{props.me}</h2>
      <p>aaaaaaa</p>
    </div>
  );
};

export default ListRecipe;
