import { useRef } from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Actors, MovieInformation, Movies, NavBar, Profile } from '.';

import useStyles from './styles';
import useAlan from './Alan';
const App = () => {
  const classes = useStyles();
  const alanBtnContainer = useRef();
  useAlan();
  const paths = ['/', '/approved'];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar}></div>
        <Routes>
          {paths.map((path) => (
            <Route key={path} path={path} element={<Movies />} />
          ))}
          <Route exact path="/movie/:id" element={<MovieInformation />}></Route>
          <Route exact path="/actors/:id" element={<Actors />}></Route>
          <Route exact path="/movies" element={<Movies />}></Route>
          <Route exact path="/profile/:id" element={<Profile />}></Route>
        </Routes>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
};

export default App;
