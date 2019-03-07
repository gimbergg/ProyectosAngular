import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { DataApiService } from 'src/app/services/data-api.service';
import { DataSource, isDataSource } from '@angular/cdk/collections';

import { DoctoresInterface } from '../../../models/doctores-interface';
import { ViewDocComponent } from '../view-doc/view-doc.component';
import { FormDocComponent } from '../form-doc/form-doc.component'

@Component({
  selector: 'app-list-doc',
  templateUrl: './list-doc.component.html',
  styleUrls: ['./list-doc.component.css']
})
export class ListDocComponent implements OnInit {
  title = 'Doctores';
  subtitle = 'Gestion de personal Medico';

  constructor(private dataApi: DataApiService, public dialog: MatDialog) { }

  private doctores: DoctoresInterface;  

  displayedColumns: string[] = ['nombre', 'apellidos', 'ci', 'telefono', 'direccion','profecion', 'acciones'];
  dataSource = new DoctoresDataSource(this.dataApi);

  ngOnInit() {
    this.getListDoctores();
  }
  getListDoctores() {
    this.dataApi
      .getAllPacinetes()
      .subscribe(
        (doctores: DoctoresInterface) => this.doctores = doctores
      );
  }

  openDialogAdd(): void {
    const dialogRef = this.dialog.open(FormDocComponent, {
      width: '60%',
      height: 'auto'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogView(id: string): void {
    this.dataApi.getPacientesById(id);
    console.log('ID DESDE EL PADRE: '+id);
    const dialogRef = this.dialog.open(ViewDocComponent, {
      width: '60%',
      height: 'auto',
      data: { key: id }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

export class DoctoresDataSource extends DataSource<any> {
  constructor(private dataApiService: DataApiService) {
    super();
  }
  connect(): Observable<DoctoresDataSource[]> {
    return this.dataApiService.getAllDoctores();
  }
  disconnect() { }
}