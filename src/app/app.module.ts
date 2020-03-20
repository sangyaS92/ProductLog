import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductListComponent } from './product-home/product-list/product-list.component';
import { ProductitemComponent } from './product-home/product-list/productitem/productitem.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductHomeComponent,
    ProductListComponent,
    ProductitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
