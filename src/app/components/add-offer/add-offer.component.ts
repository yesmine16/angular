import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Movies} from "../../models/movies";
import {ServicesService} from "../../services/services.service";

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {
offer!:Movies;
  constructor(private offerService:ServicesService) { }

  ngOnInit(): void {
  }

  save(f: NgForm) {
    console.log(f.value);
    this.offer=f.value;
    this.offerService.addMovie(this.offer).subscribe(
      data=>{
        console.log(data);
      },
      error => console.log(error)
    )
    console.log(this.offer);

  }
}
