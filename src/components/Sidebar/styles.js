import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0% 0',
  },
  image: {
    width: '100%',
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    display: 'flex',
    marginBottom: '10px',
  },
  genreImages: {
    filter: theme.palette.mode === 'dark' && 'invert(1)',
  },
}));
