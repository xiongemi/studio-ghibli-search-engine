import { createRootStore } from '@studio-ghibli-search-engine/store';
import { ConnectedRouter } from 'connected-react-router';
import { createHashHistory, History } from 'history';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { AppRoutes } from './app-routes.enum';
import Search from './search/search';

export function App() {
  const history: History = createHashHistory();
  const { store, persistor } = createRootStore(history);

  return (
    <Provider store={store}>
      <PersistGate loading={<>loading...</>} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path={AppRoutes.search}>
              <Search />
            </Route>
            <Redirect from="/" to={AppRoutes.search} />
          </Switch>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
