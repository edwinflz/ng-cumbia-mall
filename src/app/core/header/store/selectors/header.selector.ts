import { createSelector } from '@ngrx/store';

import { headerSelector } from './header-feature.selector';
import { HeaderState } from '../state/header.state';

export const fetchHeaderStyle = createSelector(
  headerSelector,
  (state: HeaderState) => state.headerStyle
);
