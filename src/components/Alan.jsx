import { useEffect, useContext } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { ColorModeContext } from '../utils/ToggleColorMode';
import { fetchToken } from '../utils';
import { searchMovie, selectGenreOrCategory } from '../features/currentGenreOrCategory';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';

const Alan = () => {
  const { setMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    alanBtn({
      key: '7e0a23ec36af58ad75c8c424e2035e0e2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, mode, genres, genre: genreOrCategory, query }) => {
        if (command === 'chooseGenre') {
          const foundGenre = genres.find((g) => g.name.toLowerCase() === genreOrCategory.toLowerCase());

          if (foundGenre) {
            navigate('/');
            dispatch(selectGenreOrCategory(foundGenre.id));
          } else {
            const category = genre.startsWith('top') ? 'top_rated' : genreOrCategory;
            hnavigate('/');
            dispatch(selectGenreOrCategory(category));
          }
        } else if (command === 'changeMode') {
          if (mode === 'light') {
            setMode('light');
          } else {
            setMode('dark');
          }
        } else if (command === 'login') {
          fetchToken();
        } else if (command === 'logout') {
          localStorage.clear();
          //window.location.reload();
          history.push('/');
        }else if(command === 'search') {
            dispatch(searchMovie(query))
        }
      },
    });
  }, []);
};

export default Alan;
