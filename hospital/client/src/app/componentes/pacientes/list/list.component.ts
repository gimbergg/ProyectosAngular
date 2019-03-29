import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { DataApiService } from 'src/app/services/data-api.service';
import { DataSource } from '@angular/cdk/collections';

import { PacietnesInterface } from '../../../models/pacientes-interface';
import { FormCreateComponent } from '../form-create/form-create.component';
import { ViewComponent } from '../view/view.component';

import { NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  title = 'Pacientes';
  subtitle = 'Gestion de Pacientes';

  constructor(
    private dataApi: DataApiService,
    private spinnerServiceList: NgxSpinnerService, 
    public dialog: MatDialog) { }

  private pacientes: PacietnesInterface;  

  displayedColumns: string[] = ['NRO_SEGURO_PAC', 'CI_PAC', 'NOMBRE_PAC', 'APE_PAT_PAC', 'APE_MAT_PAC', 'SEXO_PAC', 'FECHA_NAC_PAC', 'EMAIL_PAC', 'DIRECCION_PAC','TELEFONO_PAC', 'acciones'];
  dataSource = new PacientesDataSource(this.dataApi);

  applyFilter(filterValue: string) {
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.spinnerlist();
    this.getListPacientes();
    //this.dataSource.sort = this.sort;
    //this.dataSource2.paginator = this.paginator;
  }
  spinnerlist(): void{
    this.spinnerServiceList.show();
    setTimeout(() => {
      this.spinnerServiceList.hide();
    }, 1000);
  }
  getListPacientes() {
    this.dataApi
      .getAllPacinetes()
      .subscribe(
        (pacientes: PacietnesInterface) => this.pacientes = pacientes
      );
  }

  openDialog(id: string): void {
    const dialogRef = this.dialog.open(FormCreateComponent, {
      width: '60%',
      height: 'auto',
      data: { key: '0' }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialogUpdate(id: string): void {
    this.dataApi.getPacientesById(id);
    //console.log(element)
    const dialogRef = this.dialog.open(FormCreateComponent, {
      width: '60%',
      height: 'auto',
      data: { key: id }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialogView(id: string): void {
    this.dataApi.getPacientesById(id);
    //console.log('ID DESDE EL PADRE: '+id);
    const dialogRef = this.dialog.open(ViewComponent, {
      width: '60%',
      height: 'auto',
      data: { key: id }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onDelete(id: string): void{
    if(confirm('Esta Seguro que desea eliminar?')){
    this.dataApi.deletePacientes(id)
      .subscribe(
        res => console.log('Eliminacion exitosa'),
        err => console.log('ERROR no se pudo eliminar')
      );
    }
  }
}

export class PacientesDataSource extends DataSource<any> {
  constructor(private dataApiService: DataApiService) {
    super();
  }

  connect(): Observable<PacietnesInterface[]> {
    return this.dataApiService.getAllPacinetes();
  }
  disconnect() { 
  
  }
}
