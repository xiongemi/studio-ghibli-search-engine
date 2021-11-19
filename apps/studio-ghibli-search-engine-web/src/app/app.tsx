import MovieIcon from '@mui/icons-material/Movie';
import { AppBar, Toolbar, IconButton, Container, Link } from '@mui/material';
import { createRootStore } from '@studio-ghibli-search-engine/store';
import { ConnectedRouter } from 'connected-react-router';
import { createHashHistory, History } from 'history';
import { Provider } from 'react-redux';
import { Link as RouterLink, Redirect, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { AppRoutes } from './app-routes.enum';
import Film from './film/film';
import Films from './films/films';
import People from './people/people';
import Results from './results/results';
import Search from './search/search';
import Loading from './shared/loading/loading';

export function App() {
  const history: History = createHashHistory();
  const { store, persistor } = createRootStore(history);

  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <ConnectedRouter history={history}>
          <AppBar>
            <Toolbar>
              <Link
                variant="h6"
                underline="none"
                component={RouterLink}
                to={AppRoutes.search}
                color="inherit"
                sx={{ flexGrow: 1 }}
              >
                Studio Ghibli Search Engine
              </Link>
              <IconButton
                size="large"
                edge="end"
                component={RouterLink}
                to={AppRoutes.films}
                color="inherit"
                aria-label="all films"
              >
                <MovieIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Toolbar />
          <Container maxWidth="md">
            <Switch>
              <Route path={AppRoutes.search}>
                <Search />
              </Route>
              <Route path={AppRoutes.results}>
                <Results />
              </Route>
              <Route path={AppRoutes.film + '/:id'}>
                <Film />
              </Route>
              <Route path={AppRoutes.people + '/:id'}>
                <People />
              </Route>
              <Route path={AppRoutes.films}>
                <Films />
              </Route>
              <Redirect from="/" to={AppRoutes.search} />
            </Switch>
          </Container>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
