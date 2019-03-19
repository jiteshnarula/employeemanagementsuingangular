import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeservicesService } from 'src/app/services/employeeservices.service';

@Component({
  selector: 'app-listemp',
  templateUrl: './listemp.component.html',
  styleUrls: ['./listemp.component.css']
})
export class ListempComponent implements OnInit {

  empList : object={}

  constructor(private http:HttpClient,private employeeService :EmployeeservicesService) { }

  ngOnInit() {
    this.getAllEmployee();
  }

  getAllEmployee(){
    this.employeeService.getAllEmployee().
    subscribe(allEmployees=> this.empList = allEmployees);
    console.log("here"+this.empList);
  }

  deleteStudent(id){
    if(confirm("Are you sure you want to delete?")){
      this.employeeService.deleteEmployee(id).
                    subscribe(() => this.getAllEmployee());
    }
  }

}
