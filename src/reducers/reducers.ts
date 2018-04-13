import { combineReducers } from 'redux';
import { app, AppState } from 'reducers';

export interface RootState {
  app: AppState;
}

const reducers = combineReducers<RootState>({
  app,
});

export const rootReducer = (state: any, action: any) => reducers(state, action);
