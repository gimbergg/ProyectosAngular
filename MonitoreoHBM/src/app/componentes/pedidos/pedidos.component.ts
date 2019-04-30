import { Component, OnInit, Injectable } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';
import { PedidosService } from '../../servicios/pedidos.service';
import { Observable } from 'rxjs';
import { Pedidos } from 'src/app/model/pedidos.model';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  title = 'Lista de Pedidos';
  lista: any;
  listaPedido: any;
  constructor(
    private pedidosService:PedidosService
  ) { }


  ngOnInit() {
    this.getListPedido();
  }

  getListPedido() {
    this.pedidosService.getPedidos()      
      .subscribe(data => {
        this.listaPedido = []
        data.forEach(element => {
          let x = element.payload.toJSON()
          this.listaPedido.push(x);          
        })
        console.log(this.listaPedido);
      });
  }

}
