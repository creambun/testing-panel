import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { QuoteComponent } from './components/quote/quote.component';
import { MarketsComponent } from './components/markets/markets.component';
import { StrategyComponent } from './components/strategy/strategy.component';
import { DataComponent } from './components/data/data.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { InfoComponent } from './components/info/info.component';
import { ScatterChartComponent } from './components/scatter-chart/scatter-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MainHeaderComponent,
    PageNotFoundComponent,
    HomeComponent,
    QuoteComponent,
    MarketsComponent,
    StrategyComponent,
    DataComponent,
    TransactionComponent,
    InfoComponent,
    ScatterChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
