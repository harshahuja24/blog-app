import { Component } from '@angular/core';
import { DatabaseServiceService } from '../../database/database-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoginCheck?:any;

  ngOnInit(){
    this.isloggedIn()
  }
  

  constructor(private databaseService:DatabaseServiceService , private router:Router){}

  isloggedIn(){

    this.isLoginCheck = this.databaseService.loggedInUserId
    // console.log(this.isLoginCheck)
    return this.isLoginCheck;



  }

  logOut(){
    this.databaseService.loggedInUserId = ""
    localStorage.removeItem('loggedInUserId')
    this.router.navigate(['/login'])

  }

}
