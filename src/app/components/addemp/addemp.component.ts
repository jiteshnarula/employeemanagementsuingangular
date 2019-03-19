import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeservicesService } from 'src/app/services/employeeservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  empObject : object = []
  constructor(private http:HttpClient ,private empService :EmployeeservicesService,private route : Router) { }

  ngOnInit() {
  }

  addFunction(addStudent){
    this.empObject={
        "name": addStudent.name,
        "email" : addStudent.email
    }
    this.empService.addEmoployee(this.empObject).subscribe(addStudent=>{this.route.navigate(['/listemp-page'])})
    }

}
