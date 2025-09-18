import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Counter from "./features/counter/Counter";
import Products from "./features/products/Products";
import Todolist from "./features/todolist/Todolist";

function App() {
  return (
    <div className="border border-2 p-2 m-2 border-success">
      <h2>Hello Edupoly</h2>
      <ul className="d-flex flex-wrap justify-content-evenly list-unstyled">
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/todolist">Todolist</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/addMovie">Add Movie</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
