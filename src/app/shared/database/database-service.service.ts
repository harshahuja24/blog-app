import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {

  constructor() { 

    
  }
  users:any = JSON.parse(localStorage.getItem("users") ?? "[]")
  userCounter:number = this.users.length;

}
