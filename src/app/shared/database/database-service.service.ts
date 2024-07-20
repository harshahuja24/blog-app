import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Category } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {

  constructor() { 

    
  }
  users:any = JSON.parse(localStorage.getItem("users") ?? "[]")
  userCounter:number = this.users.length;

  loggedInUserId = localStorage.getItem("loggedInUserId") ?? "";

  category: Category[]= [
    {
      id:1,
      name:"Fashion",
      activeYN:true,
    },
    {
      id:2,
      name:"Technology",
      activeYN:true,
    },
    // {
    //   id:3,
    //   name:""
    // }
  ]

}
