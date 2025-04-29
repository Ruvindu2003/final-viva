import { Component } from '@angular/core';
import { NavBarComponent } from "../EmployeeManegement/nav-bar/nav-bar.component";
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private http:HttpClient) { }


  Login() {
    const data: { email: string; password: string } = {
      email: "",
      password: ""
    };
    this.http.post("http://localhost:8080/api/users/login", data).subscribe({
      next: (res: any) => {

        console.log(res);
        
        alert("Login Successful");
      },
      error: (err: any) => {
        alert("Login Failed");
      }
    });
  }

}
