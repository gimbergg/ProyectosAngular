import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-perfil-edit',
  templateUrl: './perfil-edit.component.html',
  styleUrls: ['./perfil-edit.component.css']
})
export class PerfilEditComponent implements OnInit {
  addressForm = this.fb.group({
    name: null,
    email: null,
    password: null
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PerfilEditComponent>) { }

  ngOnInit() {
  }

  onRegister(): void{
    alert('Edicion de Perfil de usuario');
    this.onClose();
  }
  onClose() {
    this.dialogRef.close();
  }
}
