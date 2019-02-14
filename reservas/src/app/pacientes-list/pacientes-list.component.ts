import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort } from '@angular/material';
import { PacientesFormComponent } from '../pacientes-form/pacientes-form.component';
//htttp
import { PacientesService } from '../services/pacientes.service';
import { PacientesListDataSource } from './pacientes-list-datasource';

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
  displayedColumns = ['id', 'Usuario', 'email', 'orgVenta','details','update','delete'];
  constructor(public dialog: MatDialog, private pacientesService: PacientesService) {}

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
    this.pacientesService.getGames().subscribe(
      res => {
        res
      },
      err => console.log(err)
    );
  }
  public redirectToDetails = (id: string) => {
    alert(id);
  }
 
  public redirectToUpdate = (id: string) => {
    alert(id);
  }
 
  public redirectToDelete = (id: string) => {
    alert(id);
  }
}
