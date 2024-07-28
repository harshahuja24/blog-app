import { Component } from '@angular/core';
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
}
