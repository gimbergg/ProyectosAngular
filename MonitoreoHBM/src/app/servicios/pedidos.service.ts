import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Pedidos } from '../model/pedidos.model'


@Injectable({
  providedIn: 'root'
})

export class PedidosService {
  pedidos: AngularFireList<any>;     

  constructor(
    private db: AngularFireDatabase,
  ){}

  getPedidos() {
    //return this.firestore.collection(':80/Pedido').snapshotChanges();
    return this.db.list(':80/Pedido').snapshotChanges();
  }
  getPedidosId(id: String){
    return this.db.list(':80/Pedido/' + id).snapshotChanges();
  }
  getPedidoDetalle(){
    return this.db.list(':80/PedidoDetalle').snapshotChanges();
  }
  getPedidoDetalleId(id: String){
    return this.db.list(':80/PedidoDetalle/' + id).snapshotChanges();
  }
  getHistorialPedidos(){
    return this.db.list(':80/HistorialPedidos/').snapshotChanges();
  }

  getPed(): Observable<any>{
    return this.db.list(':80/Pedido').snapshotChanges();
  }
}
