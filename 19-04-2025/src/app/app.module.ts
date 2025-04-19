import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageRestaurantsComponent } from './manage-restaurants/manage-restaurants.component';
import { FormsModule } from '@angular/forms';
import { RastaurantListComponent } from './rastaurant-list/rastaurant-list.component';
import { MyStatusPipe } from './my-status.pipe';
import { MarkElementDirective } from './mark-element.directive';

@NgModule({
  declarations: [
    AppComponent,
    ManageRestaurantsComponent,
    RastaurantListComponent,
    MyStatusPipe,
    MarkElementDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
