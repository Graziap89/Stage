import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-hc2',
  templateUrl: './hc2.component.html',
  styleUrls: ['./hc2.component.scss']
})
export class Hc2Component implements OnInit {
  h = Highcharts;
  array = Array<number>();

  Options = {};

  seriesany:any =[{
    name: 'Random data',
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime();

      for (let i = -20; i < 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      console.log("prov", data);
      return data;
    }())
  }];

  constructor() {
  }

  public fillArray() {
    for (let j = 0; j <= 5; j += 1) {
      this.array.push( Math.random());
    }
  }


  ngOnInit() {
    this.fillArray();
    console.log("array: ", this.array);

    var k= (this.array).pop();
    console.log("k: ", k);
    this.data(this.array);
  }


  public data(array:Array<number>): void {

    //Highcharts.chart('c', {
    this.Options ={
      chart: {
        type: 'spline',
        marginRight: 10,
        events: {
          load: function () {

            // set up the updating of the chart each second
            var series = this.series[0];
            setInterval(function () {
              var getted = array.pop();
              if(getted){
                var x = (new Date()).getTime(), // current time
                  y = getted;
                series.addPoint([x, y], true, true);
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
        type: 'datetime',
        tickPixelInterval: 150
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
      series: this.seriesany
    };
  }
}
