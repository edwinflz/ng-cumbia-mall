import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBrowserModule } from './browser/app-browser.module';
import { TranslocoBrowserModule } from './browser/transloco-browser.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { globalReducers } from './store/reducers';

export const REDUCER_TOKEN = new InjectionToken('Registered Reducers');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppBrowserModule,
    BrowserAnimationsModule,
    TranslocoBrowserModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    CoreModule
  ],
  providers: [
    {
      provide: REDUCER_TOKEN,
      useValue: globalReducers
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
