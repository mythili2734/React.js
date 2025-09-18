import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useAddNewMovieMutation } from "../../services/movies";
function AddMovie() {
  var [addNewMovieFn] = useAddNewMovieMutation();
  var [newMovie, setNewMovie] = React.useState({
    id: uuidv4(),
    title: "",
    year: "",
    genre: [],
    director: "",
    plot: "",
    imageUrl: "",
  });

  function handleSubmit(ev) {
    ev.preventDefault();
    addNewMovieFn(newMovie).then((res) => console.log(res));
  }
  return (
    <div>
      <h1>AddMovie</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setNewMovie({ ...newMovie, title: e.target.value });
          }}
          placeholder="title"
        />
        <br />
        <input
          type="text"
          onChange={(e) => {
            setNewMovie({ ...newMovie, year: e.target.value });
          }}
          placeholder="year"
        />
        <br />
        <input
          type="text"
          onChange={(e) => {
            setNewMovie({ ...newMovie, genre: [e.target.value] });
          }}
          placeholder="genre"
        />
        <br />
        <input
          type="text"
          onChange={(e) => {
            setNewMovie({ ...newMovie, director: e.target.value });
          }}
          placeholder="director"
        />
        <br />
        <input
          type="text"
          onChange={(e) => {
            setNewMovie({ ...newMovie, plot: e.target.value });
          }}
          placeholder="plot"
        />
        <br />
        <input
          type="text"
          onChange={(e) => {
            setNewMovie({ ...newMovie, imageUrl: e.target.value });
          }}
          placeholder="imageUrl"
        />
        <br />
        <button>Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
