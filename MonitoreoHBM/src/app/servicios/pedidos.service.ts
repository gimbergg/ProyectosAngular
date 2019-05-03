import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedidos: AngularFireList<any>;     
  constructor(
    private db: AngularFireDatabase,
    private firestore:AngularFirestore
  ){}

  getPedidos() {
    //return this.firestore.collection(':80/Pedido').snapshotChanges();
    return this.db.list(':80/Pedido').snapshotChanges();
  }
  getPedidosId(id: String){
    return this.db.list(':80/Pedido/' + id).snapshotChanges();
  }
  getPedidoDetalleId(id: String){
    return this.db.list(':80/PedidoDetalle/' + id).snapshotChanges();
  }
  getHistorialPedidosId(id: String){
    return this.db.list(':80/HistorialPedidos/' + id).snapshotChanges();
  }
}
