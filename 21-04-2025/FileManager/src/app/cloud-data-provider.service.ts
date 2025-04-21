import { Injectable } from '@angular/core';
import { DataProviderServiceService } from './data-provider-service.service';
import { RemoteAccessorService } from './remote-accessor.service';

@Injectable({
  providedIn: 'root'
})
export class CloudDataProviderService extends DataProviderServiceService {
  //remoteSrv: RemoteAccessorService;
  constructor(private remoteSrv:RemoteAccessorService) {
    super();
    //this.remoteSrv=new RemoteAccessorService();
  }
   override GetData():string{
    //Access the remote service
    this.remoteSrv.ConnectRemoteServer();
    return 'from cloud Database Provider';
   }
}
