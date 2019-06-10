import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import {Message} from '@stomp/stompjs';
import {Subscription} from 'rxjs';
import {WebsocketService} from '../websocket.service';
@Component({
  selector: 'app-angular-highcharts',
  templateUrl: './highcharts-demo.component.html',
  styleUrls: ['./highcharts-demo.component.scss']
})
export class HighchartsDemoComponent implements OnInit, AfterViewInit {
  highcharts = Highcharts;

  private datasubscription: Subscription;
  received = '';

  el = [];
  chartOptions = {};
  private onData = ((message: Message) => {
    //serie1_2019-6-20,54

    if (message && message.body) {
      this.received += message.body + ', ';
      const value = message.body.split("_")[1];
      //this.el.push(parseInt(value.split(",")[1]));

      console.log("elemento el: ", this.el);
      //this.dataUpdateFake();
    }
  });

  public data_update():void{
    this.chartOptions = {
      chart: {
        type: "spline"
      },
      title: {
        text: "Monthly Average Temperature"
      },
      subtitle: {
        text: "Source: WorldClimate.com"
      },
      xAxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      yAxis: {
        title: {
          text: "Temperature °C"
        }
      },
      tooltip: {
        valueSuffix: " °C"
      },
      series: [
        {
          name: 'Tokyo',
          data: (function() {
            // generate an array of random data
            var data = [], time = (new Date()).getTime(), i;
            for (i = -11; i <= 0; i += 1) {
              data.push(
                //x: time + i * 1000,
                Math.random()
              );
            }
            return data;
          }())

        },
        {
          name: 'New York',
          data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,24.1, 20.1, 14.1, 8.6, 2.5]
        },
        {
          name: 'Berlin',
          data: this.el
        }]/*,
      {
        name: 'London',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
      }
    ]
  };*/
    };
  }
  constructor(
   // private websocketService: WebsocketService
  ) {
  }

   ngOnInit() {
     //this.websocketService.connectWebSocket();
     //this.datasubscription = this.websocketService.getSocketDataObservable().subscribe(this.onData);
   }

  ngAfterViewInit(): void {
    this.dataUpdateFake();
  }

  dataUpdateFake(){
    const series:any = [{
      name: 'Jane',
      data: [1, Math.random(), 4]
    }, {
      name: 'John',
      data: [5, 7, 3]
    }];
    var myChart = Highcharts.chart('chart', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: series
    });
  }
}
