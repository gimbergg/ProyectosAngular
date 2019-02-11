import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ActividadEspecialidadDataSource } from './actividad-especialidad-datasource';

@Component({
  selector: 'app-actividad-especialidad',
  templateUrl: './actividad-especialidad.component.html',
  styleUrls: ['./actividad-especialidad.component.css']
})
export class ActividadEspecialidadComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ActividadEspecialidadDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new ActividadEspecialidadDataSource(this.paginator, this.sort);
  }
}
