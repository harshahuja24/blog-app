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
    description: new FormControl(),
    imageUrl: new FormControl(),
    updatedAt: new FormControl()
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
  filename:any;

  onSelectedFiles(event:any){
     this.filename = event.target.files[0].name;
    console.log(this.filename)

    this.updateForm.patchValue({
      imageUrl:this.filename
    })

   
    
  }

  updateBlog(blog:any){

    let currentDate = new Date()

    this.updateForm.setValue({
      title:blog.title,
      category:blog.category,
      description: blog.description,
      imageUrl:this.filename,
      updatedAt: currentDate


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


