import React, { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  // Fetch data on first render
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Titles</h1>
      <ul>
        {products.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
