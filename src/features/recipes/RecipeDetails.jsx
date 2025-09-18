import React from "react";
import { useParams } from "react-router-dom";
import { useGetRecipeByIdQuery } from "../../services/recipes";

function RecipeDetails() {
  var { id } = useParams();
  var { isLoading, data } = useGetRecipeByIdQuery(id);
  return (
    <div className="border border-4 p-2 m-2 border-info">
      {isLoading && <h3>Loading...</h3>}
      {!isLoading && (
        <div>
          <h1>RecipeDetails::{data.name}</h1>
          <img width="50%" src={data.image} alt="" />
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;
