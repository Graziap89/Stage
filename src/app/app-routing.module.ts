import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {D3ChartsComponent} from './d3-charts/d3-charts.component';
import {NgDygraphsComponent} from './ng-dygraphs/ng-dygraphs.component';
import {HighchartsDemoComponent} from './angular-highcharts/highcharts-demo.component';
import {Hc2Component} from './hc2/hc2.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:"full"},
  { path: 'd3-charts', component: D3ChartsComponent, pathMatch:"full"},
  { path: 'ng-dygraphs', component: NgDygraphsComponent, pathMatch:"full"},
  { path: 'app-angular-highcharts', component: HighchartsDemoComponent, pathMatch:"full"},
  { path: 'hc2', component: Hc2Component, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

