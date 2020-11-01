import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { IS_BROWSER } from '@core/tokens/app.tokens';
import { HeaderFacade } from '@header/header.facade';
import { Header } from '@header/interfaces/header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss']
})
export class HeaderContainerComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private facade: HeaderFacade,
    @Inject(IS_BROWSER) public isBrowser: boolean
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.router.events
        .pipe(filter((event) => event instanceof ActivationEnd || event instanceof NavigationEnd))
        .subscribe((router: ActivationEnd | NavigationEnd) => {
          if (router instanceof ActivationEnd) {
            if (router.snapshot.data.header_style) {
              this.facade.setHeaderStyle(router.snapshot.data.header_style);
            }
          }
        });
    }
  }

  get headerStyle$(): Observable<Header> {
    return this.facade.headerStyle$;
  }

}
