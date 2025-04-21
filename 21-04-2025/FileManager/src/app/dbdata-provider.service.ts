import { Injectable } from '@angular/core';
import { DataProviderServiceService } from './data-provider-service.service';
import { DbConnectionService } from './db-connection.service';

@Injectable({
  providedIn: 'root'
})
export class DBDataProviderService extends DataProviderServiceService{

  constructor(private dbCoSrv:DbConnectionService) {
    super();
   }
   override GetData():string{
    this.dbCoSrv.ConnectToDatabase();
    return 'from db Database Provider';
   }
}
