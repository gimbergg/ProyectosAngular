import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'ng2-charts';
import { Label } from 'ng2-charts';
import { PedidosService } from 'src/app/servicios/pedidos.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-bar-chart02',
  templateUrl: './bar-chart02.component.html',
  styleUrls: ['./bar-chart02.component.css']
})
export class BarChart02Component implements OnInit {
  constructor(private pedidosService:PedidosService) { }
  

  ngOnInit() {
  }

}
