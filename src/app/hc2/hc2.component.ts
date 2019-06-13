import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {WebsocketService} from '../websocket.service';
import {Subscription} from 'rxjs';
import {Message} from '@stomp/stompjs';


@Component({
  selector: 'app-hc2',
  templateUrl: './hc2.component.html',
  styleUrls: ['./hc2.component.scss']
})
export class Hc2Component implements OnInit {
  h = Highcharts;
  array1 = Array<number>();
  array2 = Array<number>();
  array3 = Array<number>();
  array4 = Array<number>();
  Options = {};
  received = '';

  private datasubscription: Subscription;
  private statesubscription: Subscription;

  constructor(private websocketService: WebsocketService) {
  }

  private onStateChange = (state => {
    console.log('WS connection state changed ' + state);
  });

  private onData = ((message: Message) => {
    //serie1_2019-6-20,54

    if (message && message.body) {
      this.received += message.body + ', ';
      const value = message.body.split("_")[1];
      var v = parseInt(value.split(",")[1]);
      if(message.body.includes("serie1")) this.array1.push(v);
      else if(message.body.includes("serie2")) this.array2.push(v);
      else if(message.body.includes("serie3")) this.array3.push(v);
      //else if(message.body.includes("serie4")) this.array4.push(v);
      console.log(message.body);
      this.sleep(1000);
    }

  });


  public getrandomseries() {
    return {
      name: 'Random data',
      data: (function() {
        // generate an array1 of random data
        var data = [],
          time = (new Date()).getTime();

        for (let i = -100; i < 0; i += 1) {
          data.push({
            x: time + i * 1000,
            y: null
          });
        }
        //console.log("prov", data);
        return data;
      }())
      //,dashStyle: 'longdash'
    };
  }

  ngOnInit() {
    this.websocketService.connectWebSocket();
    this.datasubscription = this.websocketService.getSocketDataObservable().subscribe(this.onData);
    this.data(this.array1, this.array2,this.array3,this.array4);
  }


  public data(array1: Array<number>, array2: Array<number>,array3: Array<number>, array4: Array<number>): void {


    this.Options = {
      chart: {
        type: 'spline',
        marginRight: 10,
        marginLeft: -2000,

        events: {
          load: function() {

            // set up the updating of the chart each second
            var series1 = this.series[0];
            var series2 = this.series[1];
            var series3 = this.series[2];
            var series4 = this.series[3];

            setInterval(function() {
              var getted = array1.pop();
              if (getted) {
                var x = (new Date()).getTime(), // current time
                  y = getted;
                series1.addPoint([x, y], true, true);
              }


              getted = array2.pop();
              if (getted) {
                var x = (new Date()).getTime(), // current time
                  y = getted;
                series2.addPoint([x, y], true, true);
              }

              getted = array3.pop();
              if (getted) {
                var x = (new Date()).getTime(), // current time
                  y = getted;
                series3.addPoint([x, y], true, true);
              }

              getted = array4.pop();
              if (getted) {
                var x = (new Date()).getTime(), // current time
                  y = getted;
                series4.addPoint([x, y], true, true);
              }

            }, 1000);
          }
        }
      },

      time: {
        useUTC: false
      },

      title: {
        text: 'Live random data'
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: 'Value'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
      },
      legend: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      plotOptions: {
        series: {
          marker: {
            enabled: false
          }
        }
      },
      series: [
        this.getrandomseries(),
        this.getrandomseries(),
        this.getrandomseries(),
        this.getrandomseries()
      ]
    };
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
