import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  pedidos: AngularFireList<any>;     
  constructor(
    private db: AngularFireDatabase,
    private firestore:AngularFirestore
  ){}

  getUsuarios() {
    //return this.firestore.collection(':80/Pedido').snapshotChanges();
    return this.db.list(':80/Usuario').snapshotChanges();
  }
}
