import {AfterViewInit, Component, OnInit} from '@angular/core';
import Dygraph from 'dygraphs';
import {Subscription} from 'rxjs';
import {Message} from '@stomp/stompjs';
import {WebsocketService} from '../websocket.service';

@Component({
  selector: 'app-ng-dygraphs',
  templateUrl: './ng-dygraphs.component.html',
  styleUrls: ['./ng-dygraphs.component.scss']
})

export class NgDygraphsComponent implements OnInit, AfterViewInit{
  private datasubscription: Subscription;
  private statesubscription: Subscription;

  received = '';

  data = "2011-01-01," + 0 + "\n" ;

  private onData = ((message: Message) => {
    //serie1_2019-6-20,54

    if(message && message.body) {
      this.received += message.body + ', ';
      const value = message.body.split("_")[1];
      this.data+= value.split(",")[0] + "," + value.split(",")[1] + "\n";
      this.updateChart();
      this.sleep(1000);
    }

  });

  private onStateChange = (state => {
    console.log('WS connection state changed ' + state);
  });

  constructor(private websocketService: WebsocketService) { }


  ngOnInit() {
    this.websocketService.connectWebSocket();
    this.datasubscription = this.websocketService.getSocketDataObservable().subscribe(this.onData);
    this.statesubscription = this.websocketService.getSocketStateObservable().subscribe(this.onStateChange);
  }

  ngAfterViewInit(): void {
    this.updateChart();
  }

  updateChart(){
    new Dygraph(
      document.getElementById("graphdiv"),
      this.data
    );

  }

  sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms));
  }
}
