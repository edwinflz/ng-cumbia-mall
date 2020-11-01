import { combineReducers } from '@ngrx/store';

import { headerStyleReducer as headerStyle } from './header.reducer';

export const headerRootReducer = combineReducers({
  headerStyle
});
