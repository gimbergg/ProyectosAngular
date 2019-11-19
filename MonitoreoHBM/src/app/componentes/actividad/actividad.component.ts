import { Component, OnInit, Injectable } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ActividadService } from '../../servicios/actividad.service';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {
  title = 'Lista de Actividades';
  lista: any;
  listaActividad: any;
  listaActividad2: any;
  listaActividad9: any;
  contador :any = 0;
  contador2 :any = 0;
  contador9 :any = 0;

  constructor(
    private actividadService:ActividadService
  ) { }
  public actividades = []
  public actividad = ''

  foods: Food[] = [
    {value: '1100', viewValue: '1100'},
    {value: '1200', viewValue: '1200'},
    {value: '9900', viewValue: '9900'},
    {value: '', viewValue: 'Todo'}
  ];
  selected = '1100';

  ngOnInit() {
    //this.getListActividad();
    this.actividadService.getActividadAll().subscribe(actividades => {
        console.log('Actividades resultado = ', actividades);
    })
  }
  getDiv(elemento){
    this.actividadService.getActividad(elemento)      
      .subscribe(data => {
        this.listaActividad = []
        data.forEach(element => {
          let x = element.payload.toJSON()
          this.listaActividad.push(x);          
        })
      });
  }

  getListActividad() {
    this.actividadService.getActividad(1100)      
      .subscribe(data => {
        this.listaActividad = []
        data.forEach(element => {
          let x = element.payload.toJSON()
          this.listaActividad.push(x);          
        })
        this.contador = this.listaActividad.length;
        console.log(this.listaActividad);
      });

      this.actividadService.getActividad(1200)      
      .subscribe(data => {
        this.listaActividad2 = []
        data.forEach(element => {
          let x = element.payload.toJSON()
          this.listaActividad2.push(x);          
        })
        this.contador2 = this.listaActividad2.length;
        console.log(this.listaActividad2);
      }); 

      this.actividadService.getActividad(9900)      
      .subscribe(data => {
        this.listaActividad9 = []
        data.forEach(element => {
          let x = element.payload.toJSON()
          this.listaActividad9.push(x);          
        })
        this.contador9 = this.listaActividad9.length;
        console.log(this.listaActividad9);
      });
  }

}
