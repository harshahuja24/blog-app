import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseServiceService } from 'src/app/shared/database/database-service.service';

@Component({
  selector: 'app-view-single-blog',
  templateUrl: './view-single-blog.component.html',
  styleUrls: ['./view-single-blog.component.css']
})
export class ViewSingleBlogComponent {

  blogId:any;
  singleBlog:any;
  author:any;
  username: any;
  email: any;
  title: any;
  description: any;
  category: any;
  ngOnInit(){
    this.getBlogDetails()
  }

  constructor( private activateRoute : ActivatedRoute, private databaseService: DatabaseServiceService){
    this.activateRoute.params.subscribe((elem:any)=> {
      this.blogId = elem['id']
    })

    console.log(this.blogId)
  }

  getBlogDetails(){
   this.singleBlog = this.databaseService.blogs.find((elem:any)=> elem.id === +this.blogId && elem.activeYN==1)
  console.log(this.singleBlog) 
  this.title = this.singleBlog.title ;
  this.description = this.singleBlog.description;
  this.category = this.singleBlog.categoryId 

  this.author = this.databaseService.users;
  console.log(this.author[0].username)
  this.username = this.author[0].username;
  this.email = this.author[0].email;
  }
  

  

}
