import {WebsocketService} from '../websocket.service';
import {Subscription} from 'rxjs';

export class BaseSocket {
  private datasubscription: Subscription;
  private statesubscription: Subscription;
  public constructor(protected websocketService: WebsocketService) {

  }
  public start(onData) {
    this.websocketService.connectWebSocket();
    this.datasubscription = this.websocketService.getSocketDataObservable().subscribe(onData);
    this.statesubscription = this.websocketService.getSocketStateObservable().subscribe(this.onStateChange);
  }

  private onStateChange = (state => {
    console.log('WS connection state changed ' + state);
  });
}
