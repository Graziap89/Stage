import {AfterViewInit, Component, OnInit} from '@angular/core';
import Dygraph from 'dygraphs';

@Component({
  selector: 'app-ng-dygraphs',
  templateUrl: './ng-dygraphs.component.html',
  styleUrls: ['./ng-dygraphs.component.scss']
})
export class NgDygraphsComponent implements OnInit, AfterViewInit{

  data = [[new Date("2008/05/07"), 75],
    [new Date("2008/05/08"), 70],
    [new Date("2008/05/09"), 80]
  ];

  options = {width: 'auto', labels: ['Date','Temperature'], xlabel: 'X label text', ylabel: 'Y label text', title: 'Working title :)', animatedZooms: true, pointSize: 4}

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
   new Dygraph(

      // containing div
      document.getElementById("graphdiv"),

      // CSV or path to a CSV file.
      "Date,Temperature\n" +
      "2008-05-07,75\n" +
      "2008-05-08,70\n" +
      "2008-05-09,80\n"

    );
  }

}
