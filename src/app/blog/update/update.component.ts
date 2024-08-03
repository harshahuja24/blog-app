import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseServiceService } from 'src/app/shared/database/database-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  // got the id using activated route is an object keeps current routes details  and params ka data is an observable and subscribe
  id:any  
  constructor( public databaseService:DatabaseServiceService, private activatedRoute: ActivatedRoute, private router:Router){
    console.log(this.activatedRoute.params)
    this.subscribeToParams()
  }
  category:any = this.databaseService.category
  updateForm = new FormGroup({
    title: new FormControl(),
    category: new FormControl(),
    description: new FormControl()
  })

  subscribeToParams(){
    this.activatedRoute.params.subscribe((value) => {
      console.log(value)
      this.id = value['id']
      let blog = this.databaseService.blogs.find((elem:any)=> elem.id === +this.id)
      // console.log(blog)
      this.updateBlog(blog)
    })
  
  }


  updateBlog(blog:any){
    this.updateForm.setValue({
      title:blog.title,
      category:blog.category,
      description: blog.description

    })
      
  }
  submit(){

    let index = this.databaseService.blogs.findIndex((elem:any)=> elem.id === +this.id)
    let blog = this.databaseService.blogs[index]
    blog = {
      ...blog,
      ...this.updateForm.value
    }
    console.log(blog)
    this.databaseService.blogs[index] = blog
    localStorage.setItem('blogs',JSON.stringify(this.databaseService.blogs))
    this.router.navigate(['/profile'])
   

  }

 

}


