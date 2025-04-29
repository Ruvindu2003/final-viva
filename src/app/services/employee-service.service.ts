import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  

  constructor( private http:HttpClient) {}
  private baseUrl = 'http://localhost:8080/api/employee'; 

  getAll():Observable<any>{
    return  this.http.get(this.baseUrl+"/get-All")
  

  }

  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+"/Delete/"+id)
  }

  searchEmployee(id:number):Observable<any>{
    return this.http.get(this.baseUrl+"/Search/"+id)
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl + "/save-employee/", employee);
  }
}

export interface Employee {
  id?: number;
  name: string;
  address: string;
  age: number;
  salary: number;
}


