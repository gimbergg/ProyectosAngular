import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'ng2-charts';
import { Label } from 'ng2-charts';
import { PedidosService } from 'src/app/servicios/pedidos.service';
import { Usuarios } from 'src/app/model/usuarios.model';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  constructor(
    private pedidosService:PedidosService,
  ) { }

  ngOnInit() {
    this.getListPedido();
  }
  
  public barChartOptions: ChartOptions = {
    responsive: true,
    
    // Utilizamos estas estructuras vacías como marcadores de posición para la temática dinámica..
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public labelUsers: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  //public barChartData: ChartDataSets[] = [{ data: ['2','','3'], label: ' Total'}];

  // eventos
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  usuarios: any = [];
  usuariosSap: any = [];
  usuariosNoSap: any = [];
  usuariosPendientes: any = [];
  //labelUsers: any = [];
  labelUsersSap: any = [];
  labelUsersNoSap: any = [];
  labelUsersPendiente: any = [];
  barChartData: any = [];
  

  getListPedido() {
    this.pedidosService.getPedidos()      
      .subscribe((elemento) => {
        elemento.forEach(element => {
          let x:any = element.payload.toJSON();
          if(x.OrgVenta == '1200'){
          this.usuarios.push(x.CodUsuario);          
            if(x.NroSAP == ''){
              if(x.Pendiente == 1){
                this.usuariosPendientes.push(x.CodUsuario);   
              }else{
                this.usuariosNoSap.push(x.CodUsuario);
              }
            }else{ 
              this.usuariosSap.push(x.CodUsuario);
            }
          }
        })
        
        this.labelUsers = Array.from(new Set(this.usuarios));
        let todo = this.obtenerDatos(this.labelUsers, this.usuarios);
        
        this.labelUsersSap = Array.from(new Set(this.usuarios));
        let todosap = this.obtenerDatos(this.labelUsersSap, this.usuariosSap);

        this.labelUsersNoSap = Array.from(new Set(this.usuarios));
        let todonosap = this.obtenerDatos(this.labelUsersNoSap, this.usuariosNoSap);

        this.barChartData = [
          { data: todo, label: ' Total'},
          { data: todosap, label: ' Sap'},
          { data: todonosap, label: ' Sin Nro Sap'}
        ];
      });
  }
  
  obtenerDatos(arr: any, usuarios: any){
    let x:any = [];
    for(var i= 0; i<arr.length;i++){
      let idx = usuarios.indexOf(arr[i]);
      let cant: Array<Number> = [];
      while (idx != -1) {
        idx = usuarios.indexOf(arr[i], idx + 1);
        cant.push(idx);
      }
      x.push(cant.length); 
    }
    return x;
  }
}
