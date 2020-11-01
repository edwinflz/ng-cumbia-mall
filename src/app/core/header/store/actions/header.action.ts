import { createAction, props } from '@ngrx/store';
import { type } from '../../../../utils/util';
import { HeaderSelection } from '../../interfaces/header.interface';

export const setHeaderStyleAction = createAction(type('[Header/Data] Set Header Style'), 
  props<{ selection: HeaderSelection }>());

export const headerActions = {
  setHeaderStyleAction
};
