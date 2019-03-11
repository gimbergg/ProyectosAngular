import { Component, OnInit,Inject } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder,Validators  } from '@angular/forms';
import { DoctoresInterface } from 'src/app/models/doctores-interface';

@Component({
  selector: 'app-view-doc',
  templateUrl: './view-doc.component.html',
  styleUrls: ['./view-doc.component.css']
})
export class ViewDocComponent implements OnInit {
  id: string;
  constructor(
    private fb: FormBuilder,
    private dataApi: DataApiService, 
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<ViewDocComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.id = data.key;
     }

    addressForm = this.fb.group({
      NOMBRE_MED: [{value: '', disabled: true}, Validators.required], 
      APE_PAT_MED: [{value: '', disabled: true}, Validators.required], 
      APE_MAT_MED: [{value: '', disabled: true}, Validators.required], 
      SEXO_MED: [{value: '', disabled: true}, Validators.required], 
      EMAIL_MED: [{value: '', disabled: true}, Validators.required], 
      DIRECCION_MED: [{value: '', disabled: true}, Validators.required], 
      TELEFONO_MED: [{value: '', disabled: true}, Validators.required], 
      ID_ESPECIALIDAD : [{value: '', disabled: true}, Validators.required], 
    });
  
    private doctores: DoctoresInterface = {
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
    this.getDetails(this.id);
  }
 
 getDetails(id: String) {
   this.dataApi.getDoctoresById(id)
     .subscribe(doctores => (this.doctores = doctores));    
 }

}
