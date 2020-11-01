import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/store/state/state';

import { Header, HeaderSelection } from './interfaces/header.interface';
import { headerActions } from './store/actions/header.action';
import { fetchHeaderStyle } from './store/selectors/header.selector';


@Injectable()
export class HeaderFacade {

  constructor(private store: Store<State>) {}

  public headerStyle$: Observable<Header> = this.store.pipe(
    select(fetchHeaderStyle)
  );

  public setHeaderStyle(selection: HeaderSelection): void {
    this.store.dispatch(headerActions.setHeaderStyleAction({
      selection
    }));
  }
}
