import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AccountBoardComponent } from './account-board/account-board.component';
import { AccountComponent } from './account/account.component';
import { AccountSubComponent } from './account-sub/account-sub.component';
import { ListBoardComponent } from './list-board/list-board.component';
import { ListComponent } from './list/list.component';
import { NgChartsModule } from 'ng2-charts';
import { MychartComponent } from './mychart/mychart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AccountBoardComponent,
    AccountComponent,
    AccountSubComponent,
    ListBoardComponent,
    ListComponent,
    MychartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
