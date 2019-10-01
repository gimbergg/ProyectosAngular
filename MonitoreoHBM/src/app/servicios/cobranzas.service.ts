import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class CobranzasService {
  cobranzas: AngularFireList<any>;     
  constructor(
    private db: AngularFireDatabase,
    private firestore:AngularFirestore
  ){}

  getRecibos() {  
    return this.db.list(':80/Recibo').snapshotChanges();
  }

  getAbonos() {  
    return this.db.list(':80/Abono').snapshotChanges();
  }

  getHistorialRecibos() {  
    return this.db.list(':80/HistorialCobranzas').snapshotChanges();
  }

  getDatosImagenes(){
    return this.db.list(':80/DatosImagenes').snapshotChanges();
  }
}
