import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }
  formValue = {
    title: '',
    price: null,
    quantity: null
  };
  ngOnInit(): void {
  }


  showF(form:any){
    console.log(form)
  }
  save(valueOfForm:any){
   console.log(valueOfForm);}
}
