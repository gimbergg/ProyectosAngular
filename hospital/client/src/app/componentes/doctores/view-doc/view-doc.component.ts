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
      nombre: [{value: '', disabled: true}, Validators.required],
      apellidos: [{value: '', disabled: true}, Validators.required],
      ci: [{value: '', disabled: true}, Validators.required],
      telefono: [{value: '', disabled: true}, Validators.required],
      direccion: [{value: '', disabled: true}, Validators.required],
      email:[{value: '', disabled: true}, Validators.required],
      profecion:[{value: '', disabled: true}, Validators.required],
    });
  
    private doctores: DoctoresInterface = {
      nombre:'',
      apellidos:'',
      ci:'',
      telefono:'',
      direccion:'',
      email:'',
      profecion:''    
    }

  ngOnInit() {
    this.getDetails(this.id);
  }
 
 getDetails(id: String) {
   this.dataApi.getDoctoresById(id)
     .subscribe(doctores => (this.doctores = doctores));    
 }

}
