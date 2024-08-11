import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ViewAllBlogsComponent } from './view-all-blogs/view-all-blogs.component';
import { ViewSingleBlogComponent } from './view-single-blog/view-single-blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CreateComponent,
    ViewAllBlogsComponent,
    ViewSingleBlogComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports:[
    CreateComponent,
    ViewAllBlogsComponent,
    ViewSingleBlogComponent,
    UpdateComponent
  ]
})
export class BlogModule { }
