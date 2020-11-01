import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActionReducerMap, StoreModule } from '@ngrx/store';

import { HeaderContainerComponent } from './components/header-container/header-container.component';
import { headerFeatureName } from './constants/header-constants';
import { HeaderState } from './store/state/header.state';
import { headerRootReducer } from './store/reducer';
import { HeaderFacade } from './header.facade';
import { TranslocoModule } from '@ngneat/transloco';

export const HEADER_REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<HeaderState>
  >('Feature Header Reducers');

@NgModule({
  declarations: [HeaderContainerComponent],
  exports: [HeaderContainerComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature(headerFeatureName, HEADER_REDUCER_TOKEN),
    TranslocoModule
  ],
  providers: [
    HeaderFacade,
    {
      provide: HEADER_REDUCER_TOKEN,
      useValue: headerRootReducer
    }
  ]
})
export class HeaderModule {}
