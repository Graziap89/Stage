import {Component, OnInit, AfterViewInit} from '@angular/core';
import {HeroService} from './hero.service';
import {RestService} from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'My First Angular App';
  start : number;
  end : number;
  constructor( private rest: RestService) { }

  ngOnInit(): void {
    this.getDate();
    this.getUtc();
    console.log(Date.now());
    this.start = Date.now();
  }
  ngAfterViewInit(): void{
    this.end = Date.now();
    console.log(this.end-this.start);
  }
  getDate(): void {
    const d = new Date();
    let h, min, sec, mm, day, month, year;

    h = d.getHours() + ':';
    min = d.getMinutes() + ':';
    sec = d.getMinutes() + ':';
    mm = d.getMilliseconds() + '-';
    day = d.getDay() + ':';
    month = d.getMonth() + ':';
    year = d.getFullYear();

    console.log(h, min, sec, mm, day, month, year);

  }
  getUtc(): void {
    const utdD = new Date(Date.UTC(1970,0,1,0,0,0,0));
    console.log(utdD.toUTCString());
  }
}
