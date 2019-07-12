import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Hc2Component} from './hc2/hc2.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:"full"},
  { path: 'hc2', component: Hc2Component, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

