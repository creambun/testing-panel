import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { QuoteComponent } from './components/quote/quote.component';
import { MarketsComponent } from './components/markets/markets.component';
import { StrategyComponent } from './components/strategy/strategy.component';
import { DataComponent } from './components/data/data.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { InfoComponent } from './components/info/info.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'quote', component: QuoteComponent },
  { path: 'market', component: MarketsComponent },
  { path: 'strategy', component: StrategyComponent },
  { path: 'data', component: DataComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: 'info', component: InfoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
