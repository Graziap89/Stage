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
import {stompConfig} from './my-rx-stomp.config';
import {StompConfig, StompService} from '@stomp/ng2-stompjs';
import { HighchartsChartComponent } from 'highcharts-angular';
import { Hc2Component } from './hc2/hc2.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,

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
