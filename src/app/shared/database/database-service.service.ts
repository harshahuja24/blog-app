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
    {
      id:3,
      name:"News",
      activeYN:true,
    },
    {
      id:4,
      name:"Education",
      activeYN:true,
    },
    
  ]

  blogs:any = JSON.parse(localStorage.getItem("blogs") ?? "[]")
  blogCount = this.blogs.length

  savedBlogsDetails:any = JSON.parse(localStorage.getItem("savedBlogsDetails") ?? "{}")

  likedBlogsDetails:any = JSON.parse(localStorage.getItem("likedBlogsDetails") ?? "{}")


}
