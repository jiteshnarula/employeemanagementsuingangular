import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  loginFunction(empObject){
    if(empObject.name=="jitesh@gmail.com" && empObject.password=="1234"){
      alert("Success");
      this.router.navigate(['/listemp-page']);
    }else{
      alert("Please enter right email and password");
    }
   
  }

}
