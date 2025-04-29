import { Component } from '@angular/core';
import { EmployeeServiceService } from '../../services/employee-service.service';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-view-employee',
  imports: [NavBarComponent],
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent {


  public studentList  : any=[]

  constructor(private service:EmployeeServiceService){

  }
  loadEmployee(){
    this.service.getAll().subscribe({
      next:(res)=>{

        this.studentList=res;


      }
    }

    )

  }


}
