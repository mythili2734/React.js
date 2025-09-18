import React from "react";
import { useGetMovieByIdQuery } from "../../services/movies";
import { useParams } from "react-router-dom";

function MovieDetails() {
  var { id } = useParams();
  var { isLoading, data } = useGetMovieByIdQuery(id);
  return (
    <div>
      <h1>MovieDetails</h1>
      {isLoading && <b>LOading...</b>}
      {!isLoading && (
        <div>
          <h1>{data.title}</h1>
          <img src={data.imageUrl} alt="" />
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
