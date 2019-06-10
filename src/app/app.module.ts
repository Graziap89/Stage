import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RestService} from './rest.service';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { D3ChartsComponent } from './d3-charts/d3-charts.component';
import {NgDygraphsModule} from 'ng-dygraphs';
import { NgDygraphsComponent } from './ng-dygraphs/ng-dygraphs.component';

import {stompConfig} from './my-rx-stomp.config';
import {StompConfig, StompService} from '@stomp/ng2-stompjs';
import {HighchartsDemoComponent} from './angular-highcharts/highcharts-demo.component';

import { HighchartsChartComponent } from 'highcharts-angular';
import { Hc2Component } from './hc2/hc2.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgDygraphsModule
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    D3ChartsComponent,
    NgDygraphsComponent,
    HighchartsDemoComponent,
    HighchartsChartComponent,
    Hc2Component
  ],
  providers: [RestService,
    StompService,
    { provide: StompConfig,
      useValue: stompConfig
    }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
