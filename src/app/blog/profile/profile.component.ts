import { Component } from '@angular/core';
import { DatabaseServiceService } from 'src/app/shared/database/database-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  myBlogs: any;

  ngOnInit(){
    this.getMyBlogs()
  }

  constructor(private databaseService:DatabaseServiceService){}

  getMyBlogs(){
    this.myBlogs = this.databaseService.blogs.filter((elem:any)=> elem.authorId === this.databaseService.loggedInUserId && elem.activeYN===1)
  }

}
