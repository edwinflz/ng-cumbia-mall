import { headerFeatureName } from 'src/app/core/header/constants/header-constants';
import { HeaderState } from 'src/app/core/header/store/state/header.state';
import { ListCategories } from 'src/app/core/models/list-categories.interface';

export type State = Readonly<{
  categories: ListCategories;
  [headerFeatureName]: HeaderState;
}>;
