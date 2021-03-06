import { createFeatureSelector } from '@ngrx/store';

import { headerFeatureName } from '@header/constants/header-constants';
import { HeaderState } from '../state/header.state';

export const headerSelector = createFeatureSelector<HeaderState>(headerFeatureName);
