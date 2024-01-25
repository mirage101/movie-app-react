import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  containerSpaceAround: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '10px 0!important',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
  },

  genresContainer: {
    margin: '10px 0!important',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  genreImage: {
    filter: theme.palette.mode === 'dark' && 'invert(1)',
    marginRight: '10px',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      padding: '0.5rem 1rem',
    },
  },
  castImage: {
    width: '100%',
    maxWidth: '7em',
    height: '8em',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: '50%',
    height: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      height: '90%',
    },
  },
  image: {
    maxWidth: '90%',
    borderRadius: '20px',
    objectFit: 'cover',
    boxShadow: '0.5em 0.5em 1em',
  },
}));
