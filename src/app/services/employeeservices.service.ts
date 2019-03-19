import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeservicesService {

  url="http://localhost:4444/employeemanagement";

  httpOptions = {
    headers : new HttpHeaders({'content-type':'application/json'})
  }
  constructor(private http:HttpClient) { }

  getAllEmployee(){
    return this.http.get(`http://localhost:4444/employeemanagement`);
  }

  deleteEmployee(id){
    return this.http.delete(`${this.url}/${id}`,this.httpOptions);
  }

  updateEmployee(empObj,id){
      return this.http.put(`${this.url}/${id}`,JSON.stringify(empObj),this.httpOptions);
  }
  addEmoployee(empObj){
    return this.http.post(`${this.url}`,empObj);
  }
}
