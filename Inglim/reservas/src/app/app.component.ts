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
    this.toastsManager.setRootViewContainerRef(vcr);
    //this.toastsManager.success('Exito','Pagina Cargada');
  }
}
