import { Component } from '@angular/core';
import { FileDownloader } from '../file-downloader';
import { FileDownloaderServiceService } from '../file-downloader-service.service';
import { DataProviderServiceService } from '../data-provider-service.service';

@Component({
  selector: 'app-download-manager',
  templateUrl: './download-manager.component.html',
  styleUrls: ['./download-manager.component.css']
})
export class DownloadManagerComponent {
  constructor(private dataSrv:DataProviderServiceService){

  }
  DownloadFile(){
  // var fileDownloader=new FileDownloader();
  // fileDownloader.DownloadFile();
  var strMsg=this.dataSrv.GetData();
  console.log(strMsg);
}
}
