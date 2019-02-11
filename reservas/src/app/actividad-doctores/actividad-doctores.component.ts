import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ActividadDoctoresDataSource } from './actividad-doctores-datasource';

@Component({
  selector: 'app-actividad-doctores',
  templateUrl: './actividad-doctores.component.html',
  styleUrls: ['./actividad-doctores.component.css']
})
export class ActividadDoctoresComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ActividadDoctoresDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['ci', 'nombre','turno', 'especialidad'];

  ngOnInit() {
    this.dataSource = new ActividadDoctoresDataSource(this.paginator, this.sort);
  }
}
