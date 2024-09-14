import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { DatabaseServiceService } from 'src/app/shared/database/database-service.service';
import { HelperService } from 'src/app/shared/services/helper.service';



@Component({
  selector: 'app-view-all-blogs',
  templateUrl: './view-all-blogs.component.html',
  styleUrls: ['./view-all-blogs.component.css']
})
export class ViewAllBlogsComponent {

  blogs:any;
  constructor( private databaseServe: DatabaseServiceService, private helperService: HelperService ){

    }
  ngOnInit(){
    this.blogs = this.databaseServe.blogs.filter((elem:any)=> elem.activeYN===1);
    
  }
  getCategoryFromCategoryid(categoryId:number){
    const category = this.helperService.getCategoryById(+categoryId) // why did we add + because undefined aara tha and a string was being passed jabke waha strict type checking hora hai so we add + to typecast that as a number 
    return category?.name
  }
  // saveBlogUser = this.databaseServe.savedBlogsDetails
  saveBlogs(id:number){
    // console.log(id)
    // let loginUser = +this.databaseServe.loggedInUserId
    // let tobeSaved = this.databaseServe.blogs.find((elem:any)=> elem.id === id)
   
    // this.databaseServe.savedBlogs.push(tobeSaved)
    // localStorage.setItem('savedBlogs', JSON.stringify(this.databaseServe.savedBlogs))

    let obj = this.databaseServe.savedBlogsDetails
    if(obj.hasOwnProperty(this.databaseServe.loggedInUserId)){
      let arr = obj[this.databaseServe.loggedInUserId]
      arr.push(id)
    }
    else{
      let arr = [id]
      obj[this.databaseServe.loggedInUserId] = arr;
    }
    console.log(obj)
    localStorage.setItem('savedBlogsDetails', JSON.stringify(obj))


  }

  likedBlog(id: number){
    console.log(id)
    let obj = this.databaseServe.likedBlogsDetails

    if(obj.hasOwnProperty(this.databaseServe.loggedInUserId)){
      let arr = obj[this.databaseServe.loggedInUserId];
      arr.push(id)
    }
    else{
      let arr = [id]
      obj[this.databaseServe.loggedInUserId] = arr
    }
    console.log(obj)
    localStorage.setItem('likedBlogsDetails', JSON.stringify(obj))

    this.databaseServe.blogs.forEach((blog:any) => {

      if(blog.id === id){

        blog.noOfLikes +=1;

      }
      
    });
    localStorage.setItem("blogs",JSON.stringify(this.databaseServe.blogs))
  }
  isLiked(id:number){
    let temp = this.databaseServe.likedBlogsDetails[this.databaseServe.loggedInUserId]?.filter((elem:any)=> elem === +id)
    return temp?.length > 0; 
  }

  
  removeLikedBlog(id: number){
    console.log(id)

    let arr = this.databaseServe.likedBlogsDetails[this.databaseServe.loggedInUserId]

    let toBeRemovedIndex = arr.findIndex((elem:any)=> elem === +id)
    console.log(toBeRemovedIndex)
    arr.splice(toBeRemovedIndex, 1)
    this.databaseServe.likedBlogsDetails[this.databaseServe.loggedInUserId] = arr
    console.log(this.databaseServe.likedBlogsDetails)

    localStorage.setItem("likedBlogsDetails",JSON.stringify(this.databaseServe.likedBlogsDetails))

    
    this.databaseServe.blogs.forEach((blog:any) => {

      if(blog.id === id){

        blog.noOfLikes -=1;

      }
      
    });
    localStorage.setItem("blogs",JSON.stringify(this.databaseServe.blogs))

  }


  isSaved(id:number){
    // console.log(id)
    
    let temp = this.databaseServe.savedBlogsDetails[this.databaseServe.loggedInUserId]?.filter((elem:any)=>elem === +id )
    // console.log(temp)
    // console.log(this.databaseServe.savedBlogsDetails)
    return temp?.length > 0; 
   
    
  }
  removeSavedBlog(id:number){
    // console.log(id)

    let arr = this.databaseServe.savedBlogsDetails[this.databaseServe.loggedInUserId]
    // console.log(arr)
    let toBeRemovedIndex = arr.findIndex((elem:any)=> elem === id)
    console.log(toBeRemovedIndex)
    arr.splice(toBeRemovedIndex,1);
    // console.log(arr)
    this.databaseServe.savedBlogsDetails[this.databaseServe.loggedInUserId] = arr
    console.log(this.databaseServe.savedBlogsDetails)

    // this.databaseServe.savedBlogsDetails.splice(toBeRemovedIndex,1)
    localStorage.setItem("savedBlogsDetails",JSON.stringify(this.databaseServe.savedBlogsDetails))

  }

  getImageUrl(name:any){
    return 'assets/Images/uploads/'+name;
  }


}
