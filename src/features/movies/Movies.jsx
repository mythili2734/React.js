import React from "react";
import {
  useDeleteMovieByIdMutation,
  useGetAllMoviesQuery,
  useLazyGetAllMoviesQuery,
} from "../../services/movies";
import { Link, useNavigate } from "react-router-dom";

function Movies() {
  var { isLoading, data } = useGetAllMoviesQuery();
  var [deleteMovieFn] = useDeleteMovieByIdMutation();
  var [getLatestMoviesFn] = useLazyGetAllMoviesQuery();
  var navigate = useNavigate();
  console.log(data);
  function deleteMovie(id) {
    if (confirm("are you sure!!! to delete movie")) {
      deleteMovieFn(id).then(() => {
        alert("Delete Ipoindira Babu");
        getLatestMoviesFn();
      });
    } else {
      alert("Sarle nee istam");
    }
  }
  return (
    <div className="border border-4 p-2 m-2 border-danger">
      <h1>Movies {isLoading && "Loading..."}</h1>
      <ul>
        {!isLoading &&
          data.map((movie) => {
            return (
              <li>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                <button
                  onClick={() => {
                    navigate(`/editMovie/${movie.id}`);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    deleteMovie(movie.id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Movies;
