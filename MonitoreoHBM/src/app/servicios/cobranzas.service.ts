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

  getCobranzas() {  
    return this.db.list(':80/Recibo').snapshotChanges();
  }
}
