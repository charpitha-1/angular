import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadManagerComponent } from './download-manager/download-manager.component';
import { DBDataProviderService } from './dbdata-provider.service';
import { DataProviderServiceService } from './data-provider-service.service';
import { CloudDataProviderService } from './cloud-data-provider.service';
import { DataServiceFactoryFunction } from './DataServiceFactory';
import { RemoteAccessorService } from './remote-accessor.service';
import { DbConnectionService } from './db-connection.service';
import { ConnectionInfo } from './connection-info';
import { CONNECTION_INFO_TOKEN, URL_INFO_TOKEN } from './ConnectionConfig';
import { UrlInfo } from './url-info';
const ConnectionData:ConnectionInfo={
  serverName:'localhost',
  portNumber:80,
  loginName:'abc23',
  password:'12345678'
}
const UrlInfoData:UrlInfo={
  url:'abc.com',
  loginName:'xyz',
  password:'abcde'
}
@NgModule({
  declarations: [
    AppComponent,
    DownloadManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide:DataProviderServiceService,useFactory: DataServiceFactoryFunction(0),deps:[RemoteAccessorService,DbConnectionService]
    },
    {provide:CONNECTION_INFO_TOKEN,useValue:ConnectionData},
    {provide:URL_INFO_TOKEN,useValue:UrlInfoData}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
