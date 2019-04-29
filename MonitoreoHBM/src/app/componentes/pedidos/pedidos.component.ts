import { Component, OnInit, Injectable } from '@angular/core';
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

  lista: Pedidos[];
  constructor(
    private pedidosService:PedidosService
  ) { }

  ngOnInit() {
    console.log(this.pedidosService.getPedidos());
    this.pedidosService.getPedidos().subscribe(data => {
      this.lista = data.map(e => {
        return {
          PedidoID: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Pedidos;
      })
      console.log(this.lista);
      
    });
  }

}
