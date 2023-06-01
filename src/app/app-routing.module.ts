import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotfoundComponent} from "./components/notfound/notfound.component";
import {HomeComponent} from "./components/home/home.component";
import {DetailsOfferComponent} from "./components/details-offer/details-offer.component";
import { AddOfferComponent } from './components/add-offer/add-offer.component';

const routes: Routes = [
  { path: 'add', component: AddOfferComponent },
  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: DetailsOfferComponent },
  { path: '**', component: NotfoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
