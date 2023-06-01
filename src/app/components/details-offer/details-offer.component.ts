import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServicesService} from "../../services/services.service";
import {Movies} from "../../models/movies";
import {of} from "rxjs";

@Component({
  selector: 'app-details-offer',
  templateUrl: './details-offer.component.html',
  styleUrls: ['./details-offer.component.css']
})
export class DetailsOfferComponent implements OnInit {

idOffer!:any;
offer!:Movies;
  constructor(private activatedRoute:ActivatedRoute,private offerService:ServicesService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params)=>{
        this.idOffer=params.get('id')!;
        this.offerService.getOffreById(this.idOffer).subscribe(
          data=>{
            this.offer=data;
          },
          error =>
            console.log(error)
        )

      }
    )
  }

  protected readonly of = of;

  supprimer(id: any) {
    this.offerService.removeMovies(id).subscribe();
  }
}
