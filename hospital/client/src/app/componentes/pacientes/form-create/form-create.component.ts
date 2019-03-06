import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {
  addressForm = this.fb.group({
    nombre: null,
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

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log('Creacion de Paciente');
  }

  ngOnInit() {
  }

}
