import { EntityState } from '@reduxjs/toolkit';
import { createTransform } from 'redux-persist';

const transformEntityStateToPersist = createTransform(
  // transform state on its way to being serialized and persisted.
  (entityState: EntityState<any>) => {
    return {
      ...entityState,
      ids: JSON.stringify(entityState.ids),
      entities: JSON.stringify(entityState.entities),
    };
  },
  // transform state being rehydrated
  (entityState): EntityState<any> => {
    return {
      ...entityState,
      ids: JSON.parse(entityState.ids),
      entities: JSON.parse(entityState.entities),
    }
  },
  // define which reducers this transform gets called for.
  { whitelist: ['films', 'people'] }
);

export { transformEntityStateToPersist };