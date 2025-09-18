import React from "react";
import { useGetAllRecipesQuery } from "../../services/recipes";
import { Link } from "react-router-dom";
function Recipes() {
  var { isLoading, data } = useGetAllRecipesQuery();
  return (
    <div className="border border-4 p-2 m-2 border-info">
      {isLoading && <h1>Loading....</h1>}
      {!isLoading && (
        <ul>
          {data.recipes.map((recipe) => {
            return (
              <li>
                <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Recipes;
