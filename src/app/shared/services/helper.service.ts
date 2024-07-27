import { Injectable } from '@angular/core';
import { DatabaseServiceService } from '../database/database-service.service';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private databaseService: DatabaseServiceService) { }

  getCategoryById( categoryId:number){
    return this.databaseService.category.find((elem)=> elem.id === categoryId)
  }
}
