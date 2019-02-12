import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort,MatDialog } from '@angular/material';
import { PacientesListDataSource } from './pacientes-list-datasource';

import { PacientesFormComponent } from '../pacientes-form/pacientes-form.component';

@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.component.html',
  styleUrls: ['./pacientes-list.component.css']
})
export class PacientesListComponent implements OnInit {
  title = 'Pacientes';
  subtitle = 'Gestion de Pacientes';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: PacientesListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'seguro', 'telefono','acciones'];
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PacientesFormComponent, {
      width: '70%',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {
    this.dataSource = new PacientesListDataSource(this.paginator, this.sort);
  }
}
