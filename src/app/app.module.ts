import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DvdListComponent } from './dvd-list/dvd-list.component';
import { DvdComponent } from './dvd-list/dvd/dvd.component';
import { RentComponent } from './rent/rent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DvdFormComponent } from './dvd-form/dvd-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { RentItemComponent } from './rent/cart-item/rent-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-list/user-item/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DvdListComponent,
    DvdComponent,
    RentComponent,
    RentItemComponent,
    DvdFormComponent,
    UserFormComponent,
    CategoryFormComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
