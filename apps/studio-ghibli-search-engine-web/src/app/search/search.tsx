import { Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import { AppRoutes } from '../app-routes.enum';
import SearchForm from '../shared/search-form/search-form';

export function Search() {
  const navigate = useNavigate();

  const submitSearchForm = (text: string) => {
    navigate(`${AppRoutes.results}?search=${text}`);
  };
  return (
    <Grid container>
      <Grid item md={2}></Grid>
      <Grid item xs={12} md={8}>
        <Box sx={{ textAlign: 'center', marginTop: 5 }}>
          <img
            src={Logo}
            alt="Studio Ghibli Logo"
            style={{ maxWidth: '100%' }}
          />
          <SearchForm onSubmit={submitSearchForm}></SearchForm>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Search;
