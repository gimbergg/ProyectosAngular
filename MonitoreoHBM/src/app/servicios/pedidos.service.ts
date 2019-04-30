import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Pedidos } from '../model/pedidos.model'



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
}
