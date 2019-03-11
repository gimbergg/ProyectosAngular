import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder,Validators, NgForm  } from '@angular/forms';
import { DataApiService } from 'src/app/services/data-api.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DoctoresInterface } from 'src/app/models/doctores-interface';

@Component({
  selector: 'app-form-doc',
  templateUrl: './form-doc.component.html',
  styleUrls: ['./form-doc.component.css']
})
export class FormDocComponent implements OnInit {
  id: string;
  constructor(
    private fb: FormBuilder,
    private dataApi: DataApiService, 
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<FormDocComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      if(data.key != '0'){
        this.id = data.key;
      }   
     }

  addressForm = this.fb.group({
    id:null,
    NOMBRE_MED: null, 
    APE_PAT_MED: null, 
    APE_MAT_MED: null, 
    SEXO_MED: null, 
    EMAIL_MED: null, 
    DIRECCION_MED: null, 
    TELEFONO_MED: null, 
    ID_ESPECIALIDAD : null, 
  });
  
    private doctores: DoctoresInterface = {
      id:null,
      NOMBRE_MED:'', 
      APE_PAT_MED:'', 
      APE_MAT_MED:'', 
      SEXO_MED:'', 
      EMAIL_MED:'', 
      DIRECCION_MED:'', 
      TELEFONO_MED:'', 
      ID_ESPECIALIDAD :'',  
    }

  ngOnInit() {
    console.log(this.id);
    if(this.id != null){
      this.getDetails(this.id);
    }
  }
  getDetails(id: String) {
    this.dataApi.getDoctoresById(id)
      .subscribe(doctores => {(this.doctores = doctores),   
         this.addressForm.controls['id'].setValue(this.id),
         this.addressForm.controls['NOMBRE_MED'].setValue(this.doctores.NOMBRE_MED),
         this.addressForm.controls['APE_PAT_MED'].setValue(this.doctores.APE_PAT_MED),
         this.addressForm.controls['APE_MAT_MED'].setValue(this.doctores.APE_MAT_MED),
         this.addressForm.controls['SEXO_MED'].setValue(this.doctores.SEXO_MED),
         this.addressForm.controls['EMAIL_MED'].setValue(this.doctores.EMAIL_MED),
         this.addressForm.controls['DIRECCION_MED'].setValue(this.doctores.DIRECCION_MED),
         this.addressForm.controls['TELEFONO_MED'].setValue(this.doctores.TELEFONO_MED)
      });
  }

  onSubmit(addressForm:NgForm): void {
    if(this.id == null){
      console.log('GUARDAR'+this.id);
      this.dataApi.saveDoctores(this.addressForm.value).subscribe(
        paciente => location.reload()
      );
    }else{
      console.log('UPDATE'+this.id);
      this.dataApi.updateDoctores(this.addressForm.value, this.id).subscribe(
      );
    }
    this.onClose();
  }
  onClose() {
    this.dialogRef.close();
  }
}
