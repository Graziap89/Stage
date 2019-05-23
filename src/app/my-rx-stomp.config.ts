import {StompConfig} from '@stomp/ng2-stompjs';

export class WebSocketConfig{
  public static uri = 'ws://localhost:8080/testws';
  public static topic = "/topic/hello";
}

export const stompConfig: StompConfig = {
  url: WebSocketConfig.uri,
  headers: {},
  heartbeat_in: 0,
  heartbeat_out: 20000,
  reconnect_delay: 5000,
  debug: false
};
