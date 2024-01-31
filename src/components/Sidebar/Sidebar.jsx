import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import useStyles from './styles';
import { useGetGenresQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import blueLogo from '../../assets/images/kinoafish-logo.png';
import redLogo from '../../assets/images/kinoafish-logo-blue.png';
const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];
// const demoCategories = [
//   { label: "Comedy", value: "comedy" },
//   { label: "Action", value: "action" },
//   { label: "Horror", value: "horror" },
//   { label: "Animation", value: "animation" },
// ];

// const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
// const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

function Sidebar({ setMobileOpen }) {
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
  const theme = useTheme();
  const classes = useStyles();
  const { data, isFetching } = useGetGenresQuery();
  //console.log(genreIdOrCategoryName);
  const dispatch = useDispatch();
  useEffect(() => {
    setMobileOpen(false);
  }, [genreIdOrCategoryName]);
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img className={classes.image} src={theme.palette.mode === 'light' ? redLogo : blueLogo} alt="KinoAfish logo" />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/" onClick={() => dispatch(selectGenreOrCategory(value))}>
            <ListItemIcon button>
              <img src={genreIcons[label.toLowerCase()]} className={classes.genreImages} height={30} />
            </ListItemIcon>
            <ListItemText primary={label} />
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <Link key={name} className={classes.links} to="/" onClick={() => dispatch(selectGenreOrCategory(id))}>
              <ListItemIcon button>
                <img src={genreIcons[name.toLowerCase()]} className={classes.genreImages} height={30} />
              </ListItemIcon>
              <ListItemText primary={name} />
            </Link>
          ))
        )}
      </List>
    </>
  );
}

export default Sidebar;
