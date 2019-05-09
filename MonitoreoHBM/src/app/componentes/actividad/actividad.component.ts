import { Component, OnInit, Injectable } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ActividadService } from '../../servicios/actividad.service';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {
  title = 'Lista de Actividades';
  lista: any;
  listaActividad: any;
  contador :any = 0;
  constructor(
    private actividadService:ActividadService
  ) { }


  ngOnInit() {
    this.getListActividad();
  }

  getListActividad() {
    this.actividadService.getActividad()      
      .subscribe(data => {
        this.listaActividad = []
        data.forEach(element => {
          let x = element.payload.toJSON()
          this.listaActividad.push(x);          
        })
        this.contador = this.listaActividad.length;
        console.log(this.listaActividad);
      });
  }

}
