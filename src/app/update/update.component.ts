import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-update',
  imports: [CommonModule,FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {


  constructor(private http: HttpClient) {}

  public id: string = "";

  public employee: any = {

      name: "",
      email: "",
      adrees: "",
      departments: "",
      datecreated: "",
      
  };

  updateEmployee(): void {  

    if(!this.employee.name||!this.employee.email||!this.employee.adrees||!this.employee.departments){

      console.error('All fields are required.');
      return;
    }

    this.http.put("http://localhost:8080/api/employee/update", this.employee, {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe({
      next: (res) => {
        console.log('Update successful', res);
        this.employee={name :"",email:"",adrees:"",departments:"",datecreated:""}; 
      },
      error: (err) => {
        console.error('Update failed', err);
      }
    });

  }





  


  searchEmployee(): void {
    if (!this.id.trim()) {
      console.error('Please enter a valid student ID.');
      return;
    }

    this.http.get(`http://localhost:8080/api/employee/Search/${this.id}`).subscribe({
      next: (res) => {
        this.employee = res; 
      },
      error: (err) => {
        console.error('Search failed', err.error);
      }
    });
  }

  

}
