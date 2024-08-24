import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatabaseServiceService } from 'src/app/shared/database/database-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  constructor(private databaseService:DatabaseServiceService,private modalService:NgbModal){
    console.log(this.controlVisibility)
  }
  // this is a dumb component that we use just to show the data and no logic of fetch should be written here!


  @Input()
  blogs:any;
  @Input()
  controlVisibility:any;

  


  @Output()
  refresh = new EventEmitter();
  // controlVisibility:any;

  
  




  open(content: any) {
    this.modalService.open(content,{centered:true})
    .result.then(
      (result:any)=>{
        console.log("CLosing With result ", result)
        const blog= this.databaseService.blogs.find((elem:any)=> elem.id === result)
        blog.activeYN=0;
        localStorage.setItem("blogs",JSON.stringify(this.databaseService.blogs))
        this.refreshData()
      },
      (reason:any)=>{
        console.log("CLosed with a reason"+reason)
      }
    )
  }

  refreshData(){
    this.refresh.emit()
  }

}
