import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private http:HttpClient,private service:ServicesService) { }
  formValue = {
    film: '',
    desc: null,
    nb: null
  };
  ngOnInit(): void {
  }


  showF(form:any){
    console.log(form)
  }
  save(valueOfForm:any){
    this.service.addMovie(valueOfForm).subscribe(
      
    );
}}
