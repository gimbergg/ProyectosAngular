import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator, MatSort,MatDialog } from '@angular/material';

import { ActividadDocFormComponent } from '../actividad-doc-form/actividad-doc-form.component';
import { ActividadEspecFormComponent } from '../actividad-espec-form/actividad-espec-form.component'

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {
  title='Actividad';
  subtitle='Gestion interna de Medicina';
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ActividadDocFormComponent, {
      width: '70%',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(ActividadEspecFormComponent, {
      width: '70%',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {
  }

}
