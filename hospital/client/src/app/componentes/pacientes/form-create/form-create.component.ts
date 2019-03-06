import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {
  addressForm = this.fb.group({
    nombre: null,
    apellidos: null,
    ci: null,
    aseguradora: null,
    seguro: null,
    vigencia: null,
    tipo: null,
    telefono: null,
    direccion: null,
    nombrec:null,
    cic:null,
    telefonoc:null,
    email:null,
    parentesco:null,
    antecedentes:null

  });

  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<FormCreateComponent>) {}

  onSubmit() {
    console.log('Creacion de Paciente');
    this.onClose();
  }
  onClose() {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
