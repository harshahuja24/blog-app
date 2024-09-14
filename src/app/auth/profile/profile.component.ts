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
  savedBlogs: any= [];

  ngOnInit(){
    this.setValues()
    this.getSavedBlogs()
    this.getMyBlogs()
  }
  activeId=1;
  // controlVisibility = true;

  constructor(private databaseService:DatabaseServiceService,private modalService:NgbModal){}

  refreshData(){
    this.getMyBlogs();
    this.getSavedBlogs()
  }
     
  // console.log("hey");

  // getMyBlogs(){
  //   this.myBlogs = this.databaseService.blogs.filter((elem:any)=> elem.authorId === this.databaseService.loggedInUserId && elem.activeYN===1)
  //   // console.log("Saved Blogs ",this.savedBlogs)
  // }

  getMyBlogs() {
    if (!this.databaseService.blogs || !this.databaseService.loggedInUserId) {
      console.error('Blogs data or logged in user ID is not available');
      return;
    }

    this.myBlogs = this.databaseService.blogs.filter((elem: any) => 
      elem.authorId === this.databaseService.loggedInUserId && elem.activeYN === 1
    );

    console.log('My Blogs:', this.myBlogs);
  }
  // getSavedBlogs(){
  //   // let savedBlogsDetails = this.databaseService.savedBlogsDetails
  //   // for(let i=0; i<savedBlogsDetails[this.databaseService.loggedInUserId].length; i++){
  //   //   // console.log(savedBlogsDetails[i]);
  //   //   console.log(savedBlogsDetails[1][i])
            
  //   //   for(let j=0; j<this.databaseService.blogCount; j++){
  //   //     // console.log(this.myBlogs[j].id)
  //   //     if(this.databaseService.blogs[j]?.id == savedBlogsDetails[this.databaseService.loggedInUserId][i]){
  //   //       console.log(this.myBlogs[j])
  //   //       this.savedBlogs.push(this.myBlogs[j]);
  //   //     }
  //   //   }
  //   // }
  //   // console.log(this.savedBlogs);

  //   let savedBlogsDetails = this.databaseService.savedBlogsDetails
  //    let arr = savedBlogsDetails[this.databaseService.loggedInUserId]
  //    this.savedBlogs = this.databaseService.blogs.filter((elem:any)=> arr.includes(elem.id ) && elem.activeYN===1);
    
  // }

  getSavedBlogs() {
    const savedBlogsDetails = this.databaseService.savedBlogsDetails;
    const loggedInUserId = this.databaseService.loggedInUserId;
  
    if (!savedBlogsDetails || !loggedInUserId) {
      console.error('savedBlogsDetails or loggedInUserId is undefined');
      this.savedBlogs = [];
      return;
    }
  
    const arr = savedBlogsDetails[loggedInUserId];
  
    if (!arr || !Array.isArray(arr)) {
      console.error('No saved blogs found for the current user');
      this.savedBlogs = [];
      return;
    }
  
    this.savedBlogs = this.databaseService.blogs.filter((elem: any) => 
      arr.includes(elem.id) && elem.activeYN === 1
    );
  }
  // savedBlogs = this.databaseService.savedBlogs;

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
      


    }
    loggedInUser = this.databaseService.loggedInUserId;

 

    
  } 



