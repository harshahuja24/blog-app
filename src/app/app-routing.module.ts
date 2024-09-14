import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './blog/create/create.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { RegisterComponent } from './auth/register/register.component';
import { ViewAllBlogsComponent } from './blog/view-all-blogs/view-all-blogs.component';
import { ViewSingleBlogComponent } from './blog/view-single-blog/view-single-blog.component';
import { HomeComponent } from './home/home.component';
import { ToastTestComponent } from './toast-test/toast-test.component';
import { UpdateComponent } from './blog/update/update.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login - BlogApp' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register - BlogApp' }
  },
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home - BlogApp' },
    children: [
      {
        path: 'blogs/:id',
        component: ViewSingleBlogComponent,
        data: { title: 'View Blog - BlogApp' }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { title: 'Profile - BlogApp' }
      },
      {
        path: 'view-all-blogs',
        component: ViewAllBlogsComponent,
        data: { title: 'All Blogs - BlogApp' }
      },
      {
        path: 'edit-blog/:id',
        component: UpdateComponent,
        data: { title: 'Edit Blog - BlogApp' }
      },
      {
        path: 'create-blogs',
        component: CreateComponent,
        data: { title: 'Create Blog - BlogApp' }
      },
    ]
  },
  {
    path: '**',
    component: ToastTestComponent,
    data: { title: '404 - Page Not Found' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
