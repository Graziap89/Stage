import {AfterViewInit, Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterViewInit {
  screenHight: number = 1000;


  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    this.screenHight = screen.height;
  }

}
