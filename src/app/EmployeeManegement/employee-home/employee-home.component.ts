import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeServiceService } from '../../services/employee-service.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-home',
  imports: [CommonModule,FormsModule,CommonModule,RouterLink],
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
      this.employeeList = Array.isArray(res) ? res : [res]; 
    },
    error: (err) => {
      console.error('Error searching employee:', err);
    }
  });
}

printReport() {
this.loadEmployee();

setTimeout(() => {
  const printContents = document.getElementById('print-section')?.innerHTML;
  const popupWin = window.open('', '_blank', 'width=900,height=650');
  popupWin?.document.open();
  popupWin?.document.write(`
    <html>
      <head>
        <title>Employee Report</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h2 { margin-bottom: 20px; }
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background-color: #f3f4f6; }
        </style>
      </head>
      <body onload="window.print(); window.close();">
        <h2>Employee Report</h2>
        ${printContents}
      </body>
    </html>
  `);
  popupWin?.document.close();
}, 500); // Delay allows time to re-fetch data
}

}






