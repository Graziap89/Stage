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

  private onData = ((message: Message) => {
    this.received += message.body + ', ';
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
   new Dygraph(
     document.getElementById("graphdiv"),
     "Date,Temperature\n" +
      "2008-05-07,75\n" +
      "2008-05-08,70\n" +
      "2008-05-09,80\n"
    );
  }
}
