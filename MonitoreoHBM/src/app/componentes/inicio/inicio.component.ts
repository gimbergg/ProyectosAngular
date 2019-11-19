import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../servicios/pedidos.service'
import { CobranzasService } from '../../servicios/cobranzas.service'
import { ActividadService } from '../../servicios/actividad.service'
import { Pedidos } from 'src/app/model/pedidos.model';
import { resolve } from 'url';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  CountPedido = 0;
  CountPedidoDetalle = 0;
  CountHitorialPedido = 0;
  CountRecibo = 0;
  CountAbono = 0;
  CountHistorialRecibo = 0;
  CountDatosImagenes = 0;
  CountActividadAll = 0;
  CountActividadx: any;
  CountActividady: any;
  CountActividadz: any;
  CountTarea = 0;
  constructor(
    private pedidosService:PedidosService,
    private cobranzasService:CobranzasService,
    private actividadService:ActividadService
  ) {}

  ngOnInit() {
    this.getPedidos()
    this.getPedidoDetalles()
    this.getHistorialPedidos()
    this.getRecibos()
    this.getAbonos()
    this.getHistorialCobranzas()
    this.getDatosImagens()
    let x = 1100;
    let y = 1200;
    let z = 9900;
    this.CountActividadx = this.getActividades(x)
    this.CountActividady = this.getActividades(y)
    this.CountActividadz = this.getActividades(z)
    this.getActividadesAll()
    this.getTarea()
  }

  cantidad(){

  }
  
  getPedidos(){
    /* this.pedidosService.getPed().subscribe(
      response => {
        this.CountPedido = response.length;         
      },
      error =>{}
    )  */ 
  }

  getPedidoDetalles(){
    /* this.pedidosService.getPedidoDetalle().subscribe(
      response => {
        this.CountPedidoDetalle = response.length;         
      },
      error =>{}
    )   */
  }

  getHistorialPedidos(){
    /* this.pedidosService.getHistorialPedidos().subscribe(
      response => {
        this.CountHitorialPedido = response.length;         
      },
      error =>{}
    ) */
  }

  getRecibos(){
    /* this.cobranzasService.getRecibos().subscribe(
      response => {
        this.CountRecibo = response.length;         
      },
      error =>{}
    ) */
  }

  getAbonos(){
    /* this.cobranzasService.getAbonos().subscribe(
      response => {
        this.CountAbono = response.length;         
      },
      error =>{}
    ) */
  }

  getHistorialCobranzas(){
    /* this.cobranzasService.getHistorialRecibos().subscribe(
      response => {
        this.CountHistorialRecibo = response.length;         
      },
      error =>{}
    ) */
  }

  getDatosImagens(){
   /*  this.cobranzasService.getDatosImagenes().subscribe(
      response => {
        this.CountDatosImagenes = response.length;         
      },
      error =>{}
    ) */
  }

  getActividades(x:any){    
    /* this.actividadService.getActividad(x).subscribe(
      response => {
        return  response.length;         
      },
      error =>{}
    ) */
  }
  getActividadesAll(){    
    /* this.actividadService.getActividadAll().subscribe(
      response => {
        this.CountActividadAll = response.length;          
      },
      error =>{}
    ) */
  }

  getTarea(){
    /* this.actividadService.getTarea().subscribe(
      response => {
        this.CountTarea = response.length;          
      },
      error =>{}
    ) */
  }

  getCustomers(){}

  getInventario(){}

  getProductosPrecio(){}  

  getUsuarios(){}

}
