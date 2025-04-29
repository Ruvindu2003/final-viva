import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rejister',
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './rejister.component.html',
  styleUrls: ['./rejister.component.css']
})
export class RejisterComponent {

  public user :any=[
    {
    name:"",
    email:"",
    phoneNumber:"",
    password:"",
    }
  ]
  




  constructor(private http:HttpClient, private router: Router) {

   }

  registerUser(data:any){
    this.http.post("http://localhost:8080/api/users/register",data).subscribe({
      next:()=>{
        alert("Registration Successful")
      },
      error:()=>{
        this.router.navigate(['dashboard/employeeview']);
        alert("Registration Sucssess")



      }
    })

}

}
