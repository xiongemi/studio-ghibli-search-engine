import { Grid, Box } from '@mui/material';
import { useHistory } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import { AppRoutes } from '../app-routes.enum';
import SearchForm from '../shared/search-form/search-form';

export function Search() {
  const history = useHistory();

  const submitSearchForm = (text: string) => {
    history.push(`${AppRoutes.results}?search=${text}`);
  };
  return (
    <Grid container>
      <Grid item md={2}></Grid>
      <Grid item xs={12} md={8}>
        <Box sx={{ textAlign: 'center', marginTop: 5 }}>
          <img src={Logo} alt="Studio Ghibli Logo" style={{maxWidth: '100%'}}/>
          <SearchForm onSubmit={submitSearchForm}></SearchForm>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Search;
