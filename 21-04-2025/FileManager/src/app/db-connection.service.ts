import { Inject, Injectable } from '@angular/core';
import { CONNECTION_INFO_TOKEN } from './ConnectionConfig';
import { ConnectionInfo } from './connection-info';

@Injectable({
  providedIn: 'root'
})
export class DbConnectionService {
  private connectionData:ConnectionInfo;

  constructor(@Inject(CONNECTION_INFO_TOKEN) conData:ConnectionInfo) {
    this.connectionData=conData;
   }
  ConnectToDatabase(){
    console.log(`connecting to Database...${this.connectionData.serverName} portnumber:${this.connectionData.portNumber} loginName:${this.connectionData.loginName} password:${this.connectionData.password}`)
  }
}
