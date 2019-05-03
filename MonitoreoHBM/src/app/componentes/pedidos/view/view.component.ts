import { Component, OnInit, Inject} from '@angular/core';
import { PedidosService } from '../../../servicios/pedidos.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Pedidos } from '../../../model/pedidos.model'
import { MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormBuilder,Validators,FormGroup  } from '@angular/forms';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  PedidoID: string;
  constructor(
    private pedidosService:PedidosService,
    private fb: FormBuilder,    
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<ViewComponent>,
    @Inject(MAT_DIALOG_DATA) data
    ) {
      this.PedidoID = data.key;
     }

  addressForm = this.fb.group({
    ActividadID: [{value: '', disabled: true}, Validators.required],
    CodCanal: [{value: '', disabled: true}, Validators.required],
    CodPrioridadEntrega: [{value: '', disabled: true}, Validators.required],
    CodSector: [{value: '', disabled: true}, Validators.required],
    CodTipoPago: [{value: '', disabled: true}, Validators.required],
    CodTipoPedido: [{value: '', disabled: true}, Validators.required],
    CodUsuario: [{value: '', disabled: true}, Validators.required],
    ComentarioCompPago: [{value: '', disabled: true}, Validators.required],
    Condicion1: [{value: '', disabled: true}, Validators.required],
    Condicion2: [{value: '', disabled: true}, Validators.required],
    Condicion3: [{value: '', disabled: true}, Validators.required],
    Condicion4: [{value: '', disabled: true}, Validators.required],
    ContactoJmID: [{value: '', disabled: true}, Validators.required],
    ContactoRpID: [{value: '', disabled: true}, Validators.required],
    ContactoSolID: [{value: '', disabled: true}, Validators.required],
    DirEntrega: [{value: '', disabled: true}, Validators.required],
    DirFactura: [{value: '', disabled: true}, Validators.required],
    Esquema: [{value: '', disabled: true}, Validators.required],
    Estado: [{value: '', disabled: true}, Validators.required],
    EstadoSync: [{value: '', disabled: true}, Validators.required],
    Fecha: [{value: '', disabled: true}, Validators.required],
    FechaCompromisoPago: [{value: '', disabled: true}, Validators.required],
    FechaEntrega: [{value: '', disabled: true}, Validators.required],
    FechaModificacion: [{value: '', disabled: true}, Validators.required],
    KUNNR: [{value: '', disabled: true}, Validators.required],
    KunnrDest: [{value: '', disabled: true}, Validators.required],
    KunnrFact: [{value: '', disabled: true}, Validators.required],
    Latitud: [{value: '', disabled: true}, Validators.required],
    Longitud: [{value: '', disabled: true}, Validators.required],
    LugarEntrega: [{value: '', disabled: true}, Validators.required],
    Moneda: [{value: '', disabled: true}, Validators.required],
    MonedaCompromisoPago: [{value: '', disabled: true}, Validators.required],
    MontoCompromisoPago: [{value: '', disabled: true}, Validators.required],
    MontoTotal: [{value: '', disabled: true}, Validators.required],
    Nit: [{value: '', disabled: true}, Validators.required],
    Nota1: [{value: '', disabled: true}, Validators.required],
    Nota2: [{value: '', disabled: true}, Validators.required],
    Nota3: [{value: '', disabled: true}, Validators.required],
    NroPedido: [{value: '', disabled: true}, Validators.required],
    NroPosiciones: [{value: '', disabled: true}, Validators.required],
    NroSAP: [{value: '', disabled: true}, Validators.required],
    Obs: [{value: '', disabled: true}, Validators.required],
    OrgVenta: [{value: '', disabled: true}, Validators.required],
    Pendiente: [{value: '', disabled: true}, Validators.required],
    RazonSocial: [{value: '', disabled: true}, Validators.required],
    TareaID: [{value: '', disabled: true}, Validators.required],
    TipoCambio: [{value: '', disabled: true}, Validators.required],
    TipoDescCab: [{value: '', disabled: true}, Validators.required]
  });
  
  private pedidos: Pedidos = {
    ActividadID: '',
    CodCanal: '',
    CodPrioridadEntrega: '',
    CodSector: '',
    CodTipoPago: '',
    CodTipoPedido: '',
    CodUsuario: '',
    ComentarioCompPago: '',
    Condicion1: '',
    Condicion2: '',
    Condicion3: '',
    Condicion4: '',
    ContactoJmID: '',
    ContactoRpID: '',
    ContactoSolID: '',
    DirEntrega: '',
    DirFactura: '',
    Esquema: '',
    Estado: '',
    EstadoSync: '',
    Fecha: '',
    FechaCompromisoPago: '',
    FechaEntrega: '',
    FechaModificacion: '',
    KUNNR: '',
    KunnrDest: '',
    KunnrFact: '',
    Latitud: '',
    Longitud: '',
    LugarEntrega: '',
    Moneda: '',
    MonedaCompromisoPago: '',
    MontoCompromisoPago: '',
    MontoTotal: '',
    Nit: '',
    Nota1: '',
    Nota2: '',
    Nota3: '',
    NroPedido: '',
    NroPosiciones: '',
    NroSAP: '',
    Obs: '',
    OrgVenta: '',
    PedidoID: '',
    Pendiente: '',
    RazonSocial: '',
    TareaID: '',
    TipoCambio: '',
    TipoDescCab: '',
  }
   pedidos2: any;
  ngOnInit() {
    this.getDetails(this.PedidoID);
  }

  getDetails(id: String) {
    this.pedidosService.getPedidosId(id)      
    .subscribe(data => {
      this.pedidos2 = data, console.log(data)
    });  
  }

}
