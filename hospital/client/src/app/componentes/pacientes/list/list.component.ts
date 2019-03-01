import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataApiService } from 'src/app/services/data-api.service';

import { Observable } from 'rxjs/observable';
import { DataSource } from '@angular/cdk/collections';

import { PacietnesInterface } from '../../../models/pacientes-interface';
import { FormCreateComponent } from '../form-create/form-create.component';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  title = 'Pacientes';
  subtitle = 'Gestion de Pacientes';

  constructor(private dataApi: DataApiService, public dialog: MatDialog) { }

  private pacientes: PacietnesInterface;  

  displayedColumns: string[] = ['nombre', 'apellidos', 'ci', 'seguro', 'telefono', 'direccion', 'id', 'acciones'];
  dataSource = new PacientesDataSource(this.dataApi);
  applyFilter(filterValue: string) {
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.getListPacientes();
    //this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
  }

  getListPacientes() {
    this.dataApi
      .getAllPacinetes()
      .subscribe(
        (pacientes: PacietnesInterface) => this.pacientes = pacientes
      );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormCreateComponent, {
      width: '70%',
      height: 'auto'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  openDialogAdd(id): void {
    console.log(id);
    const dialogRef = this.dialog.open(ViewComponent, {
      width: '70%',
      height: 'auto'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

export class PacientesDataSource extends DataSource<any> {
  constructor(private dataApiService: DataApiService) {
    super();
  }
  connect(): Observable<PacietnesInterface[]> {
    return this.dataApiService.getAllPacinetes();
  }
  disconnect() { }
}
