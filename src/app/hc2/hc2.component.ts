import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-hc2',
  templateUrl: './hc2.component.html',
  styleUrls: ['./hc2.component.scss']
})
export class Hc2Component implements OnInit {
  h = Highcharts;
  array1 = Array<number>();
  array2 = Array<number>();
  Options = {};

  constructor() {
  }

  public getrandomseries() {
    return {
    name: 'Random data',
    data: (function () {
    // generate an array1 of random data
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
}()),
      dashStyle: 'longdash',
      enabled: 'false'
};
  }

  public fillArray(): Array<number> {
    const array = Array<number>();
    for (let j = 0; j <= 5; j += 1) {
      array.push( Math.random());
    }
    return array;
  }


  ngOnInit() {
    this.array1 = this.fillArray();
    this.array2 = this.fillArray();
    this.data(this.array1, this.array2);
  }


  public data(array1:Array<number>, array2:Array<number>): void {


    this.Options ={
      chart: {
        type: 'spline',
        marginRight: 10,

        events: {
          load: function () {

            // set up the updating of the chart each second
            var series1 = this.series[0];
            var series2 = this.series[1];
            setInterval(function () {
              var getted = array1.pop();
              if(getted){
                var x = (new Date()).getTime(), // current time
                  y = getted;
                series1.addPoint([x, y], true, true);
              }


              getted = array2.pop();
              if(getted){
                var x = (new Date()).getTime(), // current time
                  y = getted;
                series2.addPoint([x, y], true, true);
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
      plotOptions: {
        series: {
          marker: {
            enabled: false
          }
        }
      },
      series:[

          this.getrandomseries(),
          this.getrandomseries()
      ]
    };
  }
}
