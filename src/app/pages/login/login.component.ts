import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor(private router:Router, private fb:FormBuilder) { }
  registreForm = this.fb.group({
    email : new FormControl('', [Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required]) 
  })
  ngOnInit() {}

  toRegister(){
    //console.log("toRegister");
    this.router.navigate(["registro"]);
  }

}
