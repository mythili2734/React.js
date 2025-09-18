import React from "react";
import { useGetAllProductsQuery } from "../../services/products";

function Products() {
  var { isLoading, data } = useGetAllProductsQuery();
  console.log(isLoading);
  console.log(data);
  return (
    <div className="border border-4 p-2 m-2 border-primary">
      <h1>Products</h1>
      {isLoading && (
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
      )}
      {isLoading === false && (
        <ul>
          {data.products.map((product) => {
            return <li>{product.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default Products;
