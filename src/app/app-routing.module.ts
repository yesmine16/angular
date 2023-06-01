import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotfoundComponent} from "./components/notfound/notfound.component";
import {HomeComponent} from "./components/home/home.component";
import {DetailsOfferComponent} from "./components/details-offer/details-offer.component";
import { AddProductComponent } from './components/add-product/add-product.component';

const routes: Routes = [
  { path: 'add', component: AddProductComponent },
  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: DetailsOfferComponent },
  { path: '**', component: NotfoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
