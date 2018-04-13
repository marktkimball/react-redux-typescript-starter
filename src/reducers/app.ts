export interface AppState {}

const initialState: AppState = {};

export const app = (state: AppState = initialState, action: any): AppState =>
  state;
