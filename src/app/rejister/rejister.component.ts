import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rejister',
  imports: [CommonModule,RouterLink],
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
  




  constructor(private http:HttpClient) {

   }

  registerUser(data:any){
    this.http.post("http://localhost:8080/api/users/register",data).subscribe({
      next:()=>{
        alert("Registration Successful")
      },
      error:()=>{
        alert("Registration Failed")
      }
    })

}

}
