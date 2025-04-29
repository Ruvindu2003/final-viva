import { Component } from '@angular/core';
import { EmployeeServiceService } from '../../services/employee-service.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  imports: [FormsModule,CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  public employeeList  : any=[
    {
      id: 0,
      name: "",
      email: "",
      adrees: "",
      departments: "",
      datecreated: "",
      
    }
  ]

  employee: FormData = new FormData();  

  constructor(private employeeservice:EmployeeServiceService,private http:HttpClient){
    this.loadEmployee();
    console.log("Employee Home Component Loaded");
  }
  AddEmployee() {
    if (!this.employeeList.name || !this.employeeList.email || !this.employeeList.adrees || !this.employeeList.departments) {
      alert('All fields are required!');
      return;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.employeeList.email)) {
      alert('Please enter a valid email address!');
      return;
    }

    let newEmployee = { 
      name: this.employeeList.name, 
      adrees: this.employeeList.adrees, 
      departments: this.employeeList.departments, 
      email: this.employeeList.email,
      datecreated: new Date().toISOString() 
    };
    console.log(newEmployee);
    this.http.post("http://localhost:8080/api/employee/save-employee", newEmployee, {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe({
      next: (res) => {
      alert('Employee added successfully!');
      console.log('Success:', res);
      },
      error: (err) => {
      console.error('Error:', err.error);
      alert('Error adding employee. Please try again.');
      }
    });
  }
  loadEmployee(){
    this.employeeservice.getAll().subscribe({
      next:(res)=>{
        this.employeeList=res;
      }
    })
  }


  }

 
