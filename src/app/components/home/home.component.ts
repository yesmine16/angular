import { Component, OnInit } from '@angular/core';
import {ServicesService} from "../../services/services.service";
import {Movies} from "../../models/movies";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listOffer!:Movies[];
  constructor(private OffreService:ServicesService,private router:Router) { }

  ngOnInit(): void {
  }


  postuler(offer: Movies) {
  // offer.nbCandidate=offer.nbCandidate-1;
  // console.log(offer.nbCandidate);
  // this.OffreService.updateOffre(offer,offer.id).subscribe(
  //   data=>{
  //     this.getallOffers()
  //   },
  //   error => console.log(error)
  // )
  }

  // private getallOffers() {
  //   this.OffreService.fetchMovies().subscribe(
  //     data=>{
  //       this.listOffer=data;
  //     },
  //     error=>{
  //       console.log();
  //     }
  //   )
  // }

  navigate(id: number) {
    this.router.navigate(['/details',id]);
  }
}
