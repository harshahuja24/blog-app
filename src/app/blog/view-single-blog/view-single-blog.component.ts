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
  blogs:any;
  ngOnInit(){
    this.blogs = this.databaseService.blogs.filter((elem:any)=> elem.activeYN===1);

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
  
  saveBlogs(id:number){
    // console.log(id)
    // let loginUser = +this.databaseService.loggedInUserId
    // let tobeSaved = this.databaseService.blogs.find((elem:any)=> elem.id === id)
   
    // this.databaseService.savedBlogs.push(tobeSaved)
    // localStorage.setItem('savedBlogs', JSON.stringify(this.databaseService.savedBlogs))

    let obj = this.databaseService.savedBlogsDetails
    if(obj.hasOwnProperty(this.databaseService.loggedInUserId)){
      let arr = obj[this.databaseService.loggedInUserId]
      arr.push(id)
    }
    else{
      let arr = [id]
      obj[this.databaseService.loggedInUserId] = arr;
    }
    console.log(obj)
    localStorage.setItem('savedBlogsDetails', JSON.stringify(obj))


  }

  likedBlog(id: number){
    console.log(id)
    let obj = this.databaseService.likedBlogsDetails

    if(obj.hasOwnProperty(this.databaseService.loggedInUserId)){
      let arr = obj[this.databaseService.loggedInUserId];
      arr.push(id)
    }
    else{
      let arr = [id]
      obj[this.databaseService.loggedInUserId] = arr
    }
    console.log(obj)
    localStorage.setItem('likedBlogsDetails', JSON.stringify(obj))

    this.databaseService.blogs.forEach((blog:any) => {

      if(blog.id === id){

        blog.noOfLikes +=1;

      }
      
    });
    localStorage.setItem("blogs",JSON.stringify(this.databaseService.blogs))
  }
  isLiked(id:number){
    let temp = this.databaseService.likedBlogsDetails[this.databaseService.loggedInUserId]?.filter((elem:any)=> elem === +id)
    return temp?.length > 0; 
  }

  
  removeLikedBlog(id: number){
    console.log(id)

    let arr = this.databaseService.likedBlogsDetails[this.databaseService.loggedInUserId]

    let toBeRemovedIndex = arr.findIndex((elem:any)=> elem === +id)
    console.log(toBeRemovedIndex)
    arr.splice(toBeRemovedIndex, 1)
    this.databaseService.likedBlogsDetails[this.databaseService.loggedInUserId] = arr
    console.log(this.databaseService.likedBlogsDetails)

    localStorage.setItem("likedBlogsDetails",JSON.stringify(this.databaseService.likedBlogsDetails))

    
    this.databaseService.blogs.forEach((blog:any) => {

      if(blog.id === id){

        blog.noOfLikes -=1;

      }
      
    });
    localStorage.setItem("blogs",JSON.stringify(this.databaseService.blogs))

  }


  isSaved(id:number){
    // console.log(id)
    
    let temp = this.databaseService.savedBlogsDetails[this.databaseService.loggedInUserId]?.filter((elem:any)=>elem === +id )
    // console.log(temp)
    // console.log(this.databaseService.savedBlogsDetails)
    return temp?.length > 0; 
   
    
  }
  removeSavedBlog(id:number){
    // console.log(id)

    let arr = this.databaseService.savedBlogsDetails[this.databaseService.loggedInUserId]
    // console.log(arr)
    let toBeRemovedIndex = arr.findIndex((elem:any)=> elem === id)
    console.log(toBeRemovedIndex)
    arr.splice(toBeRemovedIndex,1);
    // console.log(arr)
    this.databaseService.savedBlogsDetails[this.databaseService.loggedInUserId] = arr
    console.log(this.databaseService.savedBlogsDetails)

    // this.databaseService.savedBlogsDetails.splice(toBeRemovedIndex,1)
    localStorage.setItem("savedBlogsDetails",JSON.stringify(this.databaseService.savedBlogsDetails))

  }


  

}
