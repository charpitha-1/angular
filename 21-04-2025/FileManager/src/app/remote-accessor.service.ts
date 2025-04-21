import { Inject, Injectable } from '@angular/core';
import { UrlInfo } from './url-info';
import { URL_INFO_TOKEN } from './ConnectionConfig';

@Injectable({
  providedIn: 'root'
})
export class RemoteAccessorService {
  private UrlInfoData:UrlInfo
  constructor(@Inject(URL_INFO_TOKEN) UrlData:UrlInfo) { 
    this.UrlInfoData=UrlData;
  }
  ConnectRemoteServer(){
    console.log(`connecting to remote server...${this.UrlInfoData.url}`)
  }
}
