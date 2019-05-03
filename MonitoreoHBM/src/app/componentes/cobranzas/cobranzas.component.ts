import { Component, OnInit, Injectable } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { CobranzasService } from '../../servicios/cobranzas.service';

@Component({
  selector: 'app-cobranzas',
  templateUrl: './cobranzas.component.html',
  styleUrls: ['./cobranzas.component.css']
})
export class CobranzasComponent implements OnInit {
  title = 'Lista de Cobranzas';
  lista: any;
  listaCobranza: any;
  constructor(
    private cobranzasService:CobranzasService
  ) { }


  ngOnInit() {
    this.getListCobranza();
  }

  getListCobranza() {
    this.cobranzasService.getCobranzas()      
      .subscribe(data => {
        this.listaCobranza = []
        data.forEach(element => {
          let x = element.payload.toJSON()
          this.listaCobranza.push(x);          
        })
        console.log(this.listaCobranza);
      });
  }

}
