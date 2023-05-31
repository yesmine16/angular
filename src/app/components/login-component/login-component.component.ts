import { Component, OnInit } from '@angular/core';
import {Login} from "../../models/login";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
 login!:Login;
 formInvalid!:boolean;
  constructor( private router:Router) { }

  ngOnInit(): void {
    this.login=new Login();
  }

  save(f: NgForm) {
    console.log(f.value["login"])
    if(f.value["login"]=="admin" && f.value["password"]=="root"){
      this.router.navigate(['/home']);
    }else {
      this.formInvalid=true;
    }
  }
}
