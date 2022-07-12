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
        <div className="text-center mt-8">
          <img src={Logo} alt="Studio Ghibli Logo" className="w-full" />
          <SearchForm onSubmit={submitSearchForm}></SearchForm>
        </div>
      </Grid>
    </Grid>
  );
}

export default Search;
