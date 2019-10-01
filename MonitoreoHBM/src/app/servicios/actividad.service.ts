import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  pedidos: AngularFireList<any>;     
  constructor(
    private db: AngularFireDatabase,
    private firestore:AngularFirestore
  ){}

  getActividad(org) {
    //return this.firestore.collection(':80/Pedido').snapshotChanges();
    return this.db.list(':80/Actividad/'+ org).snapshotChanges();
  }

  getActividadAll() {
    //return this.firestore.collection(':80/Pedido').snapshotChanges();
    return this.db.list(':80/Actividad').snapshotChanges();
  }

  getTarea() {
    //return this.firestore.collection(':80/Pedido').snapshotChanges();
    return this.db.list(':80/Tarea').snapshotChanges();
  }
}
