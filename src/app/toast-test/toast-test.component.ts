import { Component } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { TestToastService } from '../test-toast.service';

@Component({
  selector: 'app-toast-test',
  templateUrl: './toast-test.component.html',
  styleUrls: ['./toast-test.component.css']
})
export class ToastTestComponent {

  constructor(private toastTest:TestToastService){

  }

  addToast(){
    this.toastTest.show('SuccessFully Logined', { className:'bg-success', delay:5000 })
  }




}
