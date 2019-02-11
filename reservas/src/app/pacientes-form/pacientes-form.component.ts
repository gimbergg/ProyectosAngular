import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pacientes-form',
  templateUrl: './pacientes-form.component.html',
  styleUrls: ['./pacientes-form.component.css']
})
export class PacientesFormComponent {
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


  hasUnitNumber = false;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Gracias!');
  }
}
