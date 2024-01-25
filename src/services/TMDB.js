import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
//const page = 1;
//'/movie/popular?language=en-US&page=1'
export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    //*get genres
    getGenres: builder.query({
      query: () => {
        return `/genre/movie/list?api_key=${tmdbApiKey}`;
      },
    }),
    //*get movies by [type]
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        //*get movies by search
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
        }
        //popula top_rated upcoming
        //get movies by category
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
          console.log(genreIdOrCategoryName);
          return `/movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }
        //get movies by genre
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }

        //get popular movies
        return `/movie/popular?api_key=${tmdbApiKey}&page=${page}`;
      },
    }),
    //*Get movie
    getMovie: builder.query({
      query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
    }),

    //*Get user specific list
    getRecommendations: builder.query({
      query: ({ movie_id, list }) => `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
    }),

    //*Get actor details
    //https://api.themoviedb.org/3/person/person_id?language=en-US
    getActor: builder.query({
      query: (person_id) => `/person/${person_id}?api_key=${tmdbApiKey}`,
    }),
    //*Get movies by Actor Id
    getMoviesByActorId: builder.query({
      query: ({ id, page }) => `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`,
    }),
    //*Get user specific lists
    getList: builder.query({
      query: ({ listName, accountId, sessionId, page }) => `/account/${accountId}/${listName}?api_key=${tmdbApiKey}&session_id=${sessionId}&page=${page}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery, useGetMovieQuery, useGetRecommendationsQuery, useGetActorQuery, useGetMoviesByActorIdQuery, useGetListQuery } = tmdbApi;
