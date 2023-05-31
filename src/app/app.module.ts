import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsOfferComponent } from './components/details-offer/details-offer.component';
import { AddOfferComponent } from './components/add-offer/add-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    LoginComponentComponent,
    NotfoundComponent,
    HomeComponent,
    DetailsOfferComponent,
    AddOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
