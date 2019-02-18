import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng6-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reservas';
  constructor(private toastsManager:ToastsManager, vcr:ViewContainerRef){
    this.toastsManager.setRootViewContainerRef(vcr)
  }
  opcion1(){
    this.toastsManager.success('Mensaje','title');
  }
  opcion2(){
    this.toastsManager.error('Mensaje','title');
  }
  opcion3(){
    this.toastsManager.warning('Mensaje','title');
  }
  opcion4(){
    this.toastsManager.info('Mensaje','title');
  }
  opcion5(){
    this.toastsManager.success('Mensaje','title');
  }
}
