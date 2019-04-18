import { Component, OnInit, Injectable } from '@angular/core';
//import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { PedidosService } from '../../servicios/pedidos.service';
import { Pedidos } from 'src/app/model/pedidos.model';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  list: Pedidos[];
  constructor(
    private pedidosService:PedidosService
  ) { }

  ngOnInit() {
    this.pedidosService.getPedidos().subscribe(actionArray =>{
      this.list = actionArray.map(item => {
        return {
          PedidoID : item.payload.doc.id,
          ...item.payload.doc.data()
        } as Pedidos;
      })
    });
  }
}
