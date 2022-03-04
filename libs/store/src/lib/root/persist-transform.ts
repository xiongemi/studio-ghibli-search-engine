import { EntityState } from '@reduxjs/toolkit';
import { createTransform } from 'redux-persist';

import { FILMS_FEATURE_KEY } from '../films/films.slice';
import { PEOPLE_FEATURE_KEY } from '../people/people.slice';

const transformEntityStateToPersist = createTransform(
  // transform state on its way to being serialized and persisted.
  (
    entityState: EntityState<any>
  ): {
    ids: string;
    entities: string;
  } => {
    return {
      ...entityState,
      ids: JSON.stringify(entityState.ids),
      entities: JSON.stringify(entityState.entities),
    };
  },
  // transform state being rehydrated
  (entityState: { ids: string; entities: string }): EntityState<any> => {
    return {
      ...entityState,
      ids: JSON.parse(entityState.ids),
      entities: JSON.parse(entityState.entities),
    };
  },
  // define which reducers this transform gets called for.
  { whitelist: [FILMS_FEATURE_KEY, PEOPLE_FEATURE_KEY] }
);

export { transformEntityStateToPersist };
