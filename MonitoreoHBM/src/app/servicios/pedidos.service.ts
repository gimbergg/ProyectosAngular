import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Pedidos } from '../model/pedidos.model'


@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  constructor(
    private firestore: AngularFirestore
    ) { }

  getPedidos() {
    return this.firestore.collection(':80/Pedido').snapshotChanges();
  }
}
