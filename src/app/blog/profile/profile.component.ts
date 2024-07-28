import { Component } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatabaseServiceService } from 'src/app/shared/database/database-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  myBlogs: any;
  userName:string=""
  aboutUser:string=""
  userEmail:string = ""

  ngOnInit(){
    this.getMyBlogs()
    this.setValues()
  }

  constructor(private databaseService:DatabaseServiceService,private modalService:NgbModal){}

  getMyBlogs(){
    this.myBlogs = this.databaseService.blogs.filter((elem:any)=> elem.authorId === this.databaseService.loggedInUserId && elem.activeYN===1)
  }

    open(content: any) {
      this.modalService.open(content,{centered:true})
      .result.then(
        (result:any)=>{
          console.log("CLosing With result ", result)
          const blog= this.databaseService.blogs.find((elem:any)=> elem.id === result)
          blog.activeYN=0;
          localStorage.setItem("blogs",JSON.stringify(this.databaseService.blogs))
          this.getMyBlogs()
        },
        (reason:any)=>{
          console.log("CLosed with a reason"+reason)
        }
      )
    }

    setValues(){
      const loggedInUserId = JSON.parse(localStorage.getItem("loggedInUserId") ?? "[]")
      // const userString =  localStorage.getItem("users")
      const users  = this.databaseService.users
      // +loggedInUserId
      console.log(loggedInUserId)
      console.log(users);
      +loggedInUserId
      
      const loggedUserData = users.find((element:any)=> element.id === loggedInUserId)
      this.userName = loggedUserData.username;
      this.aboutUser = loggedUserData.bio;
      this.userEmail = loggedUserData.email

      console.log(this.aboutUser, this.userName, this.userEmail)
      

      // this.databaseService.

    }

    
  } 



