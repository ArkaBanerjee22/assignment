import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as _fromComponent from './components' ;
import * as _fromContainer from './containers' ;

import { ApiService, MovieSearchService } from './services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    _fromComponent.MovieCardComponent,
    _fromComponent.SearchBarComponent,

    _fromContainer.DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService, MovieSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
