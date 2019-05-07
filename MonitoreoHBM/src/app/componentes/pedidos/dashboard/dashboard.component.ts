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
  totalPendiente:any = 0;
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

  //public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  //public barChartData: ChartDataSets[] = [];

  // eventos
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }




  sap: any;
  nosap: any;
  pendiente:any;
  usuarios: any;
  usuariosSap: any;
  usuariosNoSap: any;
  usuariosPendientes: any;
  labelUsers: any = [];
  datosUsers: any = [];
  cant2: any;
  labelUsersSap: any = [];
  cantSap: any;
  labelUsersNoSap: any = [];
  cantNoSap: any;
  labelUsersPendiente: any = [];
  cantPendiente: any;
  arr: any;

  getListPedido() {
    this.pedidosService.getPedidos()      
      .subscribe(elemento => {
        this.listaPedido = [];
        this.sap = [];
        this.nosap = [];
        this.pendiente = [];
        this.usuarios = [];
        this.usuariosSap = [];
        this.usuariosNoSap = [];
        this.usuariosPendientes = [];
        this.cant2 = [];
        this.arr = [];
        elemento.forEach(element => {
          let x = element.payload.toJSON();
          this.listaPedido.push(x);
          this.usuarios.push(x.CodUsuario);
          if(x.NroSAP == ''){
            if(x.Pendiente == 1){
              this.pendiente.push(x);
              this.usuariosPendientes.push(x.CodUsuario);   
              console.log(x.CodUsuario);
            }else{
              this.nosap.push(x);
              this.usuariosNoSap.push(x.CodUsuario);
            }
          }else{ 
            this.sap.push(x);
            this.usuariosSap.push(x.CodUsuario);
          }
        })
        this.labelUsers = Array.from(new Set(this.usuarios));
        let todo = this.obtenerDatos(this.labelUsers, this.usuarios);
        
        this.labelUsersSap = Array.from(new Set(this.usuarios));
        let todosap = this.obtenerDatos(this.labelUsersSap, this.usuariosSap);

        this.labelUsersPendiente = Array.from(new Set(this.usuarios));
        let todop = this.obtenerDatos(this.labelUsersPendiente, this.usuariosPendientes);

        this.labelUsersNoSap = Array.from(new Set(this.usuarios));
        let todonosap = this.obtenerDatos(this.labelUsersNoSap, this.usuariosNoSap);

        this.datosUsers = [
          { data: todo, label: ' Total'},
          { data: todosap, label: ' Sap'},
          { data: todonosap, label: ' Sin Nro Sap'},
          { data: todop, label: ' Pendiente'}
        ];
        this.totalsap = this.sap.length;
        this.totalnosap = this.nosap.length;
        this.totalPendiente = this.pendiente.length;
        this.contador = this.listaPedido.length;
      });

  }
  
  obtenerDatos(datos: any, usuarios: any){
    let x:any = [];
    for(var i= 0; i<datos.length;i++){
      let idx = usuarios.indexOf(datos[i]);
      let cant = [];
      while (idx != -1) {
        idx = usuarios.indexOf(datos[i], idx + 1);
        cant.push(idx);
      }
      x.push(cant.length); 
    }
    return x;
  }



  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  
    changeLabels() {
      const words = ['hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
        'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
        'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
        'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
        'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny'];
      const randomWord = () => words[Math.trunc(Math.random() * words.length)];
      this.pieChartLabels = Array.apply(null, { length: 3 }).map(_ => randomWord());
    }
  
    addSlice() {
      this.pieChartLabels.push(['Line 1', 'Line 2', 'Line 3']);
      this.pieChartData.push(400);
      this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
    }
  
    removeSlice() {
      this.pieChartLabels.pop();
      this.pieChartData.pop();
      this.pieChartColors[0].backgroundColor.pop();
    }
  
    changeLegendPosition() {
      this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
    }
}
