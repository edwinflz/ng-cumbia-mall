import { createAction, props } from '@ngrx/store';
import { ListCategories } from '@core/models/list-categories.interface';
import { type } from '@app/utils/util';

export const loadCategorieDataSuccess = createAction(
  type('[Global/API] Load categories data success'),
  props<{ categories: ListCategories }>()
);
