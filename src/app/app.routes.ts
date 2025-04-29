import { Routes } from '@angular/router';
import { EmployeeHomeComponent } from './EmployeeManegement/employee-home/employee-home.component';
import { ViewEmployeeComponent } from './EmployeeManegement/view-employee/view-employee.component';
import { Component } from '@angular/core';
import { NavBarComponent } from './EmployeeManegement/nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './EmployeeManegement/employee/employee.component';
import { UpdateComponent } from './update/update.component';

export const routes: Routes = [

    {

        path:'Login',
        component:LoginComponent,

    },

    {
    path:"",
    component:LoginComponent,

  
    },

    {


    path:'dashboard',
    component:NavBarComponent,
    
     children :[
        {
            path:'employeeview',
            component:EmployeeHomeComponent

            

        },

        {
            path:"employee",
            component:EmployeeComponent

        },
        {
            path:"update",
            component:UpdateComponent
        }

        
     ]


    }

    

];
