import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetActorQuery, useGetMoviesByActorIdQuery } from '../../services/TMDB';
import { Typography, Button, Grid, Box, CircularProgress } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { MovieList, Pagination } from '..';

import useStyles from './styles';
const Actors = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetActorQuery(id);
  const classes = useStyles();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const { data: movies } = useGetMoviesByActorIdQuery({ id, page });
  console.log(data);
  if (isFetching) {
    return (
      <Box display="flex" justify="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Button endIcon={<ArrowBack />} sx={{ borderColor: 'primary.main' }} onClick={() => navigate(-1)} color="primary">
        Back
      </Button>
    );
  }
  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid item sm={12} lg={4}>
        <img className={classes.image} src={`https://image.tmdb.org/t/p/w780${data?.profile_path}`} alt={data.name} />
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Typography variant="h3" align="center" gutterBottom>
          {data?.name}
        </Typography>
        <Typography variant="h4" align="left" gutterBottom>
          Known as: {data?.also_known_as.length > 0 ? data?.also_known_as : data?.also_known_as.map((name, i) => name + ', ')}
        </Typography>

        <Typography variant="h5" align="left" gutterBottom>
          {data?.biography || 'Sorry there is no biography yet.'}
        </Typography>
        <Typography variant="h6" align="left" gutterBottom>
          Gender: {data?.gender !== 2 ? 'female' : 'male'}
        </Typography>
        <Typography variant="h6" align="left" gutterBottom>
          Place of birth: {data?.place_of_birth} / Born: {new Date(data?.birthday).toDateString()}
        </Typography>
        <Typography variant="h6" align="left" gutterBottom>
          Popularity: {data?.popularity} / 100
        </Typography>
        <Box marginTop="2rem" display="flex" justifyContent="space-around">
          <Button variant="contained" color="primary" target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/name/${data?.imdb_id}/?ref_=tt_cl_t_1`}>
            IMDB
          </Button>
          <Button startIcon={<ArrowBack />} sx={{ borderColor: 'primary.main' }} onClick={() => navigate(-1)} color="primary">
            Back
          </Button>
        </Box>
      </Grid>
      <Box margin="2rem 0">
        <Typography variant="h2" gutterBottom align="center">
          Movies
        </Typography>
        {movies && <MovieList movies={movies} numberOfMovies={12} />}
        <Pagination currentPage={page} setPage={setPage} totalPages={movies?.total_pages} />
      </Box>
    </Grid>
  );
};

export default Actors;
