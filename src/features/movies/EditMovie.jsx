import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetMovieByIdQuery,
  useLazyGetAllMoviesQuery,
  useUpdateMovieByIdMutation,
} from "../../services/movies";

function EditMovie() {
  var { id } = useParams();
  var navigate = useNavigate();
  var { isLoading, data } = useGetMovieByIdQuery(id);
  var [movieDetails, setMovieDetails] = useState({});
  var [updateMovieFn] = useUpdateMovieByIdMutation();
  var [latestMoviesFn] = useLazyGetAllMoviesQuery();
  useEffect(() => {
    setMovieDetails({ ...data });
  }, [data]);
  function handleSubmit(ev) {
    ev.preventDefault();
    console.log(movieDetails);
    updateMovieFn(movieDetails).then(() => {
      latestMoviesFn();
      navigate("/movies");
    });
  }
  return (
    <div>
      <h1>EditMovie</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setMovieDetails({ ...movieDetails, title: e.target.value });
          }}
          placeholder="title"
          defaultValue={movieDetails.title}
        />
        <br />
        <input
          type="text"
          onChange={(e) => {
            setMovieDetails({ ...movieDetails, year: e.target.value });
          }}
          placeholder="year"
          defaultValue={movieDetails.year}
        />
        <br />
        <input
          type="text"
          onChange={(e) => {
            setMovieDetails({ ...movieDetails, genre: [e.target.value] });
          }}
          placeholder="genre"
          defaultValue={movieDetails.genre}
        />
        <br />
        <input
          type="text"
          onChange={(e) => {
            setMovieDetails({ ...movieDetails, director: e.target.value });
          }}
          placeholder="director"
          defaultValue={movieDetails.director}
        />
        <br />
        <input
          type="text"
          onChange={(e) => {
            setMovieDetails({ ...movieDetails, plot: e.target.value });
          }}
          placeholder="plot"
          defaultValue={movieDetails.plot}
        />
        <br />
        <input
          type="text"
          onChange={(e) => {
            setMovieDetails({ ...movieDetails, imageUrl: e.target.value });
          }}
          placeholder="imageUrl"
          defaultValue={movieDetails.imageUrl}
        />
        <br />
        <button>Update Movie</button>
      </form>
    </div>
  );
}

export default EditMovie;
