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

  getActividad() {
    //return this.firestore.collection(':80/Pedido').snapshotChanges();
    return this.db.list(':80/Actividad/1100').snapshotChanges();
  }
}
