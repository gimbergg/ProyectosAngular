import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators,FormControl,NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Location } from '@angular/common';
import { DataApiService } from 'src/app/services/data-api.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PacietnesInterface } from 'src/app/models/pacientes-interface';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})

export class FormCreateComponent implements OnInit {
  id: string;
  constructor(
    private fb: FormBuilder,
    private dataApi: DataApiService, 
    private location: Location,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<FormCreateComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      if(data.key != '0'){
        this.id = data.key;
      }      
     }

     addressForm = this.fb.group({
      id: null,
      NRO_SEGURO_PAC:null,
      CI_PAC:null,
      NOMBRE_PAC:null,
      APE_PAT_PAC:null,
      APE_MAT_PAC:null,
      SEXO_PAC:null,
      FECHA_NAC_PAC:null,
      EMAIL_PAC:null,
      DIRECCION_PAC:null,
      TELEFONO_PAC:null
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
    if(this.id != null){
      this.getDetails(this.id);
    }
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

  onSubmit(addressForm:NgForm): void {
    if(this.id == null){
      console.log()
      this.dataApi.savePacientes(this.addressForm.value).subscribe(
        paciente => location.reload()
      );
    }else{
      this.dataApi.updatePacientes(this.addressForm.value, this.id).subscribe(
      );
    }
    this.onClose();
  }

  onClose() {
    this.dialogRef.close();
  }
}
