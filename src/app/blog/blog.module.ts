import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ViewAllBlogsComponent } from './view-all-blogs/view-all-blogs.component';
import { ViewSingleBlogComponent } from './view-single-blog/view-single-blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateComponent,
    ViewAllBlogsComponent,
    ViewSingleBlogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CreateComponent,
    ViewAllBlogsComponent,
    ViewSingleBlogComponent
  ]
})
export class BlogModule { }
