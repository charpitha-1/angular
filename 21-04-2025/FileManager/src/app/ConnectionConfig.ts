import { InjectionToken } from "@angular/core";
import { ConnectionInfo } from "./connection-info";
import { UrlInfo } from "./url-info";

export const CONNECTION_INFO_TOKEN=new InjectionToken<ConnectionInfo>('connectioninfo')
export const URL_INFO_TOKEN=new InjectionToken<UrlInfo>('urlinfo')