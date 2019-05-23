import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChartDemoComponent} from './ng2-charts/chart-demo.component';
import {HomeComponent} from './home/home.component';
import {D3ChartsComponent} from './d3-charts/d3-charts.component';
import {NgDygraphsComponent} from './ng-dygraphs/ng-dygraphs.component';


const routes: Routes = [
  { path: 'ng2-charts', component: ChartDemoComponent},
  { path: '', component: HomeComponent},
  { path: 'd3-charts', component: D3ChartsComponent},
  {path: 'ng-dygraphs', component: NgDygraphsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
