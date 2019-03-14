import {AfterViewInit, Component, OnInit, OnDestroy} from '@angular/core';


@Component({
  selector: 'app-chart-demo',
  templateUrl: './chart-demo.component.html',
  styleUrls: ['./chart-demo.component.scss']
})
export class ChartDemoComponent implements OnInit, AfterViewInit, OnDestroy {
  chart_data: number[];
  chart_label: string [];
  start: number;
  end: number;

  type = 'line';
  data:any;
  options = {
    responsive: true,
    maintainAspectRatio: false,

    legend: {
      display: true,
      labels: {
        fontColor: 'rgb(255, 99, 132)'
      }
    }
  };
  constructor() { }

  ngOnInit() {
    this.insertData();
    this.data = {
      labels:this.chart_label,
      datasets: [
        {
          label: "My First dataset",
          data: this.chart_data,
          backgroundColor: 'none',
          borderColor: 'red',
          borderWidth: 0.1,
          radius: 0
        }
      ]
    };
    this.start = Date.now();

  }
  insertData() {
    this.chart_data = [];
    this.chart_label = [];
    for(let i = 0; i < 3000; i++) {
      this.chart_data.push(Math.random());
      this.chart_label.push(i + '');
    }
  }
  ngAfterViewInit(): void {
    this.end = Date.now();

    console.log(this.end-this.start);
  }
  ngOnDestroy() {
    this.chart_data = undefined;
    this.chart_label = undefined;
  }

}
