import { Action, createReducer, on } from '@ngrx/store';
import { ListCategories } from '@core/models/list-categories.interface';
import { loadCategorieDataSuccess } from '../actions';

export const initialState: ListCategories = {} as ListCategories;

const featureReducer = createReducer(
  initialState,
  on(loadCategorieDataSuccess, (state, { categories }) => {
    return categories;
  })
);

export const categoriesDataReducer = (state: ListCategories, action: Action): ListCategories => {
  return featureReducer(state, action);
};
