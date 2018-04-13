import { createStore, compose } from 'redux';
import { rootReducer } from 'reducers';

export const store = createStore(
  rootReducer,
  undefined,
  compose((f: any) => f),
);
