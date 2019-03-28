import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {ChartDemoComponent} from './ng2-charts/chart-demo.component';
import {HomeComponent} from './home/home.component';
import {D3ChartsComponent} from './d3-charts/d3-charts.component';
import {Ng2Component} from './ng2/ng2.component';
import {NgDygraphsComponent} from './ng-dygraphs/ng-dygraphs.component';


const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'ng2-charts', component: ChartDemoComponent},
  { path: '', component: HomeComponent},
  { path: 'd3-charts', component: D3ChartsComponent},
  { path: 'ng2',component:Ng2Component},
  {path: 'ng-dygraphs', component: NgDygraphsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
