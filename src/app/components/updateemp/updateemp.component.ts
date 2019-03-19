import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { EmployeeservicesService } from 'src/app/services/employeeservices.service';

@Component({
  selector: 'app-updateemp',
  templateUrl: './updateemp.component.html',
  styleUrls: ['./updateemp.component.css']
})
export class UpdateempComponent implements OnInit {
  id:number;
  matchedData : object ={};
  empList:any=[]
  empObject:object={}

  constructor(private http:HttpClient,
    private activatedRoute : ActivatedRoute,private router : Router,private empService : EmployeeservicesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
                                      this.id = +params['id'];
                                                  });
                                                  console.log("idhere"+this.id);
                                this.empService.getAllEmployee().subscribe(displayEmployee => {this.empList = displayEmployee
           
                                  
          for(let i =0 ; i <= this.empList.length;i++){
          
            if(parseInt(this.empList[i].id)=== this.id){
              console.log("hello"+this.empList[i])
               
              this.matchedData = this.empList[i];
  
            }
            }                     });
                                               
        }

            updateFunction(employee){
                this.empObject={
                  "name" : employee.name,
                  "email":employee.email
                }
                console.log(this.empObject);
            
                this.empService.updateEmployee(this.empObject,this.id).subscribe(()=>
                this.router.navigate(['/listemp-page']));
            }

 


}
