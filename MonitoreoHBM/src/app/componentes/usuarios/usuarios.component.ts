import { Component, OnInit, Injectable } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { UsuariosService } from '../../servicios/usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  title = 'Lista de Usuarios';
  lista: any;
  listaUsuario: any;
  constructor(
    private usuariosService:UsuariosService,
  ) { }


  ngOnInit() {
    this.getListUsuario();
  }

  getListUsuario() {
    this.usuariosService.getUsuarios()      
      .subscribe(data => {
        this.listaUsuario = []
        data.forEach(element => {
          let x = element.payload.toJSON()
          this.listaUsuario.push(x);          
        })
        console.log(this.listaUsuario);
      });
  }

}
