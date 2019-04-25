import { Component, OnInit, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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
    private pedidosService:PedidosService,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.pedidosService.getPedidos().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          PedidoID: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Pedidos;
      })
    });
  }
}
