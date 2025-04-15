import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeadingComponent } from './main-heading/main-heading.component';
import { SubHeadingComponent } from './sub-heading/sub-heading.component';
import { MyParagraphComponent } from './my-paragraph/my-paragraph.component';
import { Row1Component } from './row1/row1.component';
import { Row2Component } from './row2/row2.component';
import { Row3Component } from './row3/row3.component';
import { MydivComponent } from './mydiv/mydiv.component';
import { Row1sub1Component } from './row1sub1/row1sub1.component';
import { Row1sub2Component } from './row1sub2/row1sub2.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeadingComponent,
    SubHeadingComponent,
    MyParagraphComponent,
    Row1Component,
    Row2Component,
    Row3Component,
    MydivComponent,
    Row1sub1Component,
    Row1sub2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
