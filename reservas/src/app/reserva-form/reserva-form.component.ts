import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reserva-form',
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.css']
})
export class ReservaFormComponent implements OnInit  {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Dentista', abbreviation: 'AL'},
    {name: 'Medicina General', abbreviation: 'AK'},
  ];

  doctors = [
    {name: 'Ingrid Mita Aiza', abbreviation: 'AL'},
    {name: 'Limberg Alcon Espejo', abbreviation: 'AK'},
  ];

  constructor(private fb: FormBuilder, private _formBuilder: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
