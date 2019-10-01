import { Component, OnInit, HostListener,Injectable } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { PedidosService } from '../../servicios/pedidos.service';
import { Pedidos } from '../../model/pedidos.model'
import { ViewComponent } from './view/view.component';
import { __values } from 'tslib';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  title = 'Lista de Pedidos';
  lista: any;
  listaPedido: any;
  contador :any = 0;

  constructor(
    private pedidosService:PedidosService,
    public dialog: MatDialog,
  ) { }

  foods: Food[] = [
    {value: '1100', viewValue: '1100'},
    {value: '1200', viewValue: '1200'},
    {value: '9900', viewValue: '9900'}
  ];
  selected = '1100';

  @HostListener('input', ['$event.target']) oninput(targetElement: any) {
    console.log(targetElement.value);
  }

  ngOnInit() {
    this.getListPedido();
//this.getPed();
  }
  public p: Pedidos[]
  getPed(){
    this.pedidosService.getPed().subscribe(
      response => {
        console.log(response);
          this.p = response.p        
      },
      error =>{
        console.log(<any> error);
      }
    )
  }

  getDiv(elemento){
    this.pedidosService.getPedidos()      
      .subscribe(data => {
        this.listaPedido = []
        data.forEach(element => {
          let x = element.payload.toJSON();
          this.listaPedido.push(x);      
        })
      });
  }

  getListPedido() {
    this.pedidosService.getPedidos()      
      .subscribe(data => {
        this.listaPedido = []
        data.forEach(element => {
          let x = element.payload.toJSON();
          this.listaPedido.push(x);      
        })
        this.contador = this.listaPedido.length;
        console.log(this.listaPedido.length);
      });
  }

  openDialogView(id: string): void{
    console.log(id);
    this.pedidosService.getPedidosId(id);    
    const dialogRef = this.dialog.open(ViewComponent, {
      width: '80%',
      height: 'auto',
      data: { key: id }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogUpdate(id: string): void{
    console.log(id);
  }

}
