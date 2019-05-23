import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RestService} from './rest.service';
import {ChartModule} from 'angular2-chartjs';
import { ChartDemoComponent } from './ng2-charts/chart-demo.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { D3ChartsComponent } from './d3-charts/d3-charts.component';
import { Ng2Component } from './ng2/ng2.component';
import {NgDygraphsModule} from 'ng-dygraphs';
import { NgDygraphsComponent } from './ng-dygraphs/ng-dygraphs.component';

import {stompConfig} from './my-rx-stomp.config';
import {StompConfig, StompService} from '@stomp/ng2-stompjs';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule,
    NgDygraphsModule
  ],
  declarations: [
    AppComponent,
    ChartDemoComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    D3ChartsComponent,
    Ng2Component,
    NgDygraphsComponent
  ],
  providers: [RestService,
    StompService,
    { provide: StompConfig,
      useValue: stompConfig
    }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
