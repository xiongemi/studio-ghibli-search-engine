import MovieIcon from '@mui/icons-material/Movie';
import { AppBar, Toolbar, IconButton, Container, Link } from '@mui/material';
import {
  createRootStore,
  FILMS_FEATURE_KEY,
  PEOPLE_FEATURE_KEY,
  SEARCH_FEATURE_KEY,
  transformEntityStateToPersist,
} from '@studio-ghibli-search-engine/store';
// TODO replace BrowserRouter with ConnectedRouter history={history} Router once typing is fixed https://github.com/supasate/connected-react-router/issues/565
// import { ConnectedRouter } from 'connected-react-router';
import { createHashHistory, History } from 'history';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Link as RouterLink,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

import { AppRoutes } from './app-routes.enum';
import Loading from './shared/loading/loading';

const Film = React.lazy(() => import('./film/film'));
const Films = React.lazy(() => import('./films/films'));
const People = React.lazy(() => import('./people/people'));
const Results = React.lazy(() => import('./results/results'));
const Search = React.lazy(() => import('./search/search'));

export function App() {
  const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: [SEARCH_FEATURE_KEY, FILMS_FEATURE_KEY, PEOPLE_FEATURE_KEY],
    transforms: [transformEntityStateToPersist],
  };

  const history: History = createHashHistory();
  const { store, persistor } = createRootStore(persistConfig, history);

  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate loading={<Loading />} persistor={persistor}>
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
            <Container maxWidth="lg">
              <Routes>
                <Route path={AppRoutes.search} element={<Search />} />
                <Route path={AppRoutes.results} element={<Results />} />
                <Route path={AppRoutes.film + '/:id'} element={<Film />} />
                <Route path={AppRoutes.people + '/:id'} element={<People />} />
                <Route path={AppRoutes.films} element={<Films />} />
                <Route
                  index
                  element={<Navigate replace to={AppRoutes.search} />}
                />
              </Routes>
            </Container>
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

export default App;
