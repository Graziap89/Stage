import { Component, OnInit, AfterViewInit,  OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ng2',
  templateUrl: './ng2.component.html',
  styleUrls: ['./ng2.component.scss']
})
export class Ng2Component implements OnInit, AfterViewInit, OnDestroy  {
  ng2_data: number [];
  label: string [];
  inizio: number;
  fine: number;

  type = 'line';
  data: any;
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

  constructor() {
  }

  ngOnInit() {
    this.insertData();
    this.data = {
      labels: this.label,
      dataset: [
        {
          label: 'First',
          data: this.ng2_data,
          backgroundColor: 'none',
          borderColor: 'green',
          borderWidth: 0.1,
          radius: 0
        }
      ]
    };
    this.inizio = Date.now();
    console.log('init: ', this.inizio);
  }
  insertData() {
    this.ng2_data = [];
    this.label = [];
    for(let i = 0; i < 3000; i++) {
      this.ng2_data.push(Math.random());
      this.label.push(i + '');
    }
  }
  ngAfterViewInit(): void {
    this.fine = Date.now();
    console.log('after: ', this.fine - this.inizio);
  }
  ngOnDestroy(): void {
    this.ng2_data = undefined;
    this.label = undefined;
  }
}
