// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/movies" }),
  endpoints: (builder) => ({
    getAllMovies: builder.query({
      query: () => `/?delay=1000`,
    }),
    getMovieById: builder.query({
      query: (id) => `/${id}`,
    }),
    addNewMovie: builder.mutation({
      query: (movie) => ({
        url: `/`,
        method: "POST",
        body: JSON.stringify(movie),
      }),
    }),
    deleteMovieById: builder.mutation({
      query: (id) => {
        return {
          url: `/${id}`,
          method: "DELETE",
        };
      },
    }),
    updateMovieById: builder.mutation({
      query: (movie) => {
        return {
          url: `/${movie.id}`,
          method: "PUT",
          body: JSON.stringify(movie),
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllMoviesQuery,
  useLazyGetAllMoviesQuery,
  useGetMovieByIdQuery,
  useAddNewMovieMutation,
  useDeleteMovieByIdMutation,
  useUpdateMovieByIdMutation,
} = moviesApi;
