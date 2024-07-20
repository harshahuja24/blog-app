import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './blog/create/create.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './blog/profile/profile.component';
import { RegisterComponent } from './auth/register/register.component';
import { ViewAllBlogsComponent } from './blog/view-all-blogs/view-all-blogs.component';
import { ViewSingleBlogComponent } from './blog/view-single-blog/view-single-blog.component';
import { HomeComponent } from './home/home.component';
import { ToastTestComponent } from './toast-test/toast-test.component';

const routes: Routes = [
   {
    path:'login',
    component:LoginComponent
   },
   {
    path:'profile',
    component:ProfileComponent
   },
   {
    path:'register',
    component:RegisterComponent
   },

    {
      path:'create',
      component:CreateComponent
    },
    {
      path:'view-all-blogs',
      component:ViewAllBlogsComponent
    },
    {
      path:'view-single-blog',
      component:ViewSingleBlogComponent
    },
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'create-blogs',
      component:CreateComponent

    },
    {
      path:'**',
      component:ToastTestComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
