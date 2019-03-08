import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
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
  addressForm = this.fb.group({
    id: null,
    nombre: null,
    apellidos: null,
    ci: null,
    aseguradora: null,
    seguro: null,
    vigencia: null,

    telefono: null,
    direccion: null,
    nombrec:null,
    cic:null,
    telefonoc:null,
    email:null,
    parentesco:null,
    antecedentes:null
  });
  private paciente: PacietnesInterface = {
    id: null,
    nombre:'',
    apellidos:'',
    ci:'',
    seguro:'',
    telefono:'',
    direccion:'',
    reserva:'',
    vigencia:'',
    nombrec:'',
    cic:'',
    telefonoc:'',
    email:'',
    parentesco:'',
    antecedentes:''
  }

  id: any;
  constructor(
    private fb: FormBuilder,
    private dataApi: DataApiService, 
    private location: Location,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<FormCreateComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.id = data.key;
     }

  onSubmit(addressForm: NgForm): void {
    console.log(this.addressForm.value.id);
    if(addressForm.value.id == null){
      console.log()
      this.dataApi.savePacientes(this.addressForm.value).subscribe(paciente => location.reload());
    }else{
      console.log(this.id)
    }
    this.onClose();
  }

  onClose() {
    this.dialogRef.close();
    
  }

  ngOnInit() {

      this.getDetails(this.id);

  }
  getDetails(id: String) {
    this.dataApi.getPacientesById(id)
      .subscribe(paciente => (this.paciente = paciente));    
  }
}
