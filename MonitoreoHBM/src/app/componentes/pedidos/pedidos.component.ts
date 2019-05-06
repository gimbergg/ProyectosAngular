import { Component, OnInit, Injectable } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { PedidosService } from '../../servicios/pedidos.service';
import { ViewComponent } from './view/view.component';

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


  ngOnInit() {
    this.getListPedido();
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
