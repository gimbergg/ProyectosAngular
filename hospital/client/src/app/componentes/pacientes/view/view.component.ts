import { Component, OnInit, Input, Inject} from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { PacietnesInterface } from 'src/app/models/pacientes-interface';
import { MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormBuilder,Validators  } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {
  id: string;
  constructor(
    private fb: FormBuilder,
    private dataApi: DataApiService, 
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<ViewComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.id = data.key;
     }

     addressForm = this.fb.group({
      id: [{value: '', disabled: true}, Validators.required],
      NRO_SEGURO_PAC:[{value: '', disabled: true}, Validators.required],
      CI_PAC:[{value: '', disabled: true}, Validators.required],
      NOMBRE_PAC:[{value: '', disabled: true}, Validators.required],
      APE_PAT_PAC:[{value: '', disabled: true}, Validators.required],
      APE_MAT_PAC:[{value: '', disabled: true}, Validators.required],
      SEXO_PAC:[{value: '', disabled: true}, Validators.required],
      FECHA_NAC_PAC:[{value: '', disabled: true}, Validators.required],
      EMAIL_PAC:[{value: '', disabled: true}, Validators.required],
      DIRECCION_PAC:[{value: '', disabled: true}, Validators.required],
      TELEFONO_PAC:[{value: '', disabled: true}, Validators.required]
    });
  private paciente: PacietnesInterface = {
    id: null,
    NRO_SEGURO_PAC:'',
    CI_PAC:'',
    NOMBRE_PAC:'',
    APE_PAT_PAC:'',
    APE_MAT_PAC:'',
    SEXO_PAC:'',
    FECHA_NAC_PAC:'',
    EMAIL_PAC:'',
    DIRECCION_PAC:'',
    TELEFONO_PAC:''
  }

  ngOnInit(){    
    //Envio recepcion del parametro por url
    //const paciente_id = this.route.snapshot.params["id"];
    console.log('EL ID DESDE EL HIJO '+ this.id);
    this.getDetails(this.id);
   }
  
  getDetails(id: String) {
    this.dataApi.getPacientesById(id)
    .subscribe(
      paciente => {
        (this.paciente = paciente),
        this.addressForm.controls['id'].setValue(this.id),
        this.addressForm.controls['NRO_SEGURO_PAC'].setValue(this.paciente.NRO_SEGURO_PAC),
        this.addressForm.controls['CI_PAC'].setValue(this.paciente.CI_PAC),
        this.addressForm.controls['NOMBRE_PAC'].setValue(this.paciente.NOMBRE_PAC),
        this.addressForm.controls['APE_PAT_PAC'].setValue(this.paciente.APE_PAT_PAC),
        this.addressForm.controls['APE_MAT_PAC'].setValue(this.paciente.APE_MAT_PAC),
        this.addressForm.controls['SEXO_PAC'].setValue(this.paciente.SEXO_PAC),
        this.addressForm.controls['FECHA_NAC_PAC'].setValue(this.paciente.FECHA_NAC_PAC),
        this.addressForm.controls['EMAIL_PAC'].setValue(this.paciente.EMAIL_PAC),
        this.addressForm.controls['DIRECCION_PAC'].setValue(this.paciente.DIRECCION_PAC),
        this.addressForm.controls['TELEFONO_PAC'].setValue(this.paciente.TELEFONO_PAC)
      }
    ); 
  }
  
}
