import React from "react";
import { Grid } from "@mui/material";
import useStyles from "./styles";
import Movie from "../Movie/Movie";

const MovieList = ({ movies, numberOfMovies , excludeFirst}) => {
  const classes = useStyles();
  console.log("MovieList");
  const startFrom = excludeFirst ? 1 : 0;
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.slice(startFrom, numberOfMovies).map((movie, index) => (
        <Movie key={index} movie={movie} i={index} />
      ))}
    </Grid>
  );
};

export default MovieList;
