import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chart.js';
import { Label } from 'ng2-charts';
import { PedidosService } from 'src/app/servicios/pedidos.service';

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

  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2019'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40,81, 56, 55, 40,1], label: ' Pendientes' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: ' Enviados' },
    { data: [28, 18, 10, 19, 86, 23, 2], label: ' Errores' }
  ];

  constructor(
    private pedidosService:PedidosService,
  ) { }

  ngOnInit() {
    this.getListPedido();
  }

  sap: any;
  nosap: any;
  getListPedido() {
    this.pedidosService.getPedidos()      
      .subscribe(data => {
        this.listaPedido = [];
        this.sap = [];
        this.nosap = [];
        data.forEach(element => {
          let x = element.payload.toJSON();
          this.listaPedido.push(x);           
          if(x.NroSAP == ''){
            this.sap.push(x);
          }else{
            if(x.Error > 0){
              console.log('ERRORES');
            }
            this.nosap.push(x);
          }
        })
        
        this.totalsap = this.sap.length;
        this.totalnosap = this.nosap.length;
        this.contador = this.listaPedido.length;
      });
  }

  // eventos
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Solo cambiar 3 valores
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }
}
