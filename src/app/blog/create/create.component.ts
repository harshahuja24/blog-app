import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DatabaseServiceService } from 'src/app/shared/database/database-service.service';
import { Category } from 'src/app/shared/interfaces/category.interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  createForm= new FormGroup({
    title: new FormControl(),
    category: new FormControl(),
    description: new FormControl()

  })
  constructor(private databaseService:DatabaseServiceService, public router: Router){
    
  }

  category:Category[] = this.databaseService.category;

  submit(){
    console.log(this.createForm.value)

    const blogsData = this.generateDataModel()
    this.databaseService.blogs.push(blogsData)
    localStorage.setItem("blogs",JSON.stringify(this.databaseService.blogs));
    this.createForm.reset()
    this.router.navigate(['/profile'])

  }

  private generateDataModel(){
    return {
      id:++this.databaseService.blogCount,
      authorId: this.databaseService.loggedInUserId,
      noOfLikes:0,
      activeYN:1,
      ...this.createForm.value
    }
  }

}
