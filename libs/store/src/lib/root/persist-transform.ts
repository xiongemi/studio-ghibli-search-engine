import { EntityState } from '@reduxjs/toolkit';
import { createTransform } from 'redux-persist';

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
  }
);

export { transformEntityStateToPersist };
