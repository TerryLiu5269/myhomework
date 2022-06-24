import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AccountBoardComponent } from './account-board/account-board.component';
import { AccountComponent } from './account/account.component';
import { AccountSubComponent } from './account-sub/account-sub.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AccountBoardComponent,
    AccountComponent,
    AccountSubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
