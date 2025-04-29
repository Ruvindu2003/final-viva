import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeServiceService } from '../../services/employee-service.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-home',
  imports: [CommonModule,FormsModule,CommonModule],
  templateUrl: './employee-home.component.html',
  styleUrl: './employee-home.component.css'
})
export class EmployeeHomeComponent {
  public id: string = "1";

  constructor(private  employee:EmployeeServiceService) {
    this.loadEmployee();
    console.log("Employee Home Component Loaded");
  }

  ngOnInit(): void {
    this.employee.getAll().subscribe({
      next:(res)=>{
        console.log(res);
      }
    })
  }
  public employeeList : any=[]



  loadEmployee(){
    this.employee.getAll().subscribe({
      next:(res)=>{

        this.employeeList=res;


      }
    }

    )

  }
  deleteEmployee(id:number){
    this.employee.deleteEmployee(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.loadEmployee();
      }
    })
  }

searchEmployee(id: number) {
  this.employee.searchEmployee(id).subscribe({
    next: (res) => {
      console.log(res);
      this.employeeList = Array.isArray(res) ? res : [res]; // Ensure the response is an array
    },
    error: (err) => {
      console.error('Error searching employee:', err);
    }
  });
}



}


