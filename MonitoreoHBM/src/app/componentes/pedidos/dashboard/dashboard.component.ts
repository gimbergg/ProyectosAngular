import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/servicios/pedidos.service';
import { Pedidos } from '../../../model/pedidos.model'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';
  listaPedido: any;
  contador:any = 0;
  totalsap:any = 0;
  totalnosap:any = 0;
  totalPendiente:any = 0;

  otro: Pedidos[] = [];


  constructor(
    private pedidosService:PedidosService,
  ) { }

  ngOnInit() {
    this.getListPedido()   
    this.getPed() 
  }

  getPed(){
    this.pedidosService.getPed().subscribe(
      datos => {
        this.otro = datos;
        console.log("DATOS DE PEDIDOS" + this.otro.length)
      },
      erro => {
        console.log(erro)
      }
    )
  }
  
  sap: any;
  nosap: any;
  pendiente:any;
  arr: any;
  getListPedido() {
    this.pedidosService.getPedidos()      
      .subscribe(elemento => {
        this.sap = [];
        this.nosap = [];
        this.pendiente = [];
        this.listaPedido = [];
        this.arr = [];
        elemento.forEach(element => {
          let x:any = element.payload.toJSON();
          this.listaPedido.push(x);
          if(x.NroSAP == ''){
            if(x.Pendiente == 1){
              this.pendiente.push(x);
            }else{
              this.nosap.push(x);
            }
          }else{ 
            this.sap.push(x);
          }
        })
        this.totalsap = this.sap.length;
        this.totalnosap = this.nosap.length;
        this.totalPendiente = this.pendiente.length;
        this.contador = this.listaPedido.length;
      });
  }
}
