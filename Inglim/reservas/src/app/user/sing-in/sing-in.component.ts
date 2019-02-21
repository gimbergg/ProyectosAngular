import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  loginForm = this.fb.group({
    user: [null, Validators.compose([
      Validators.required, Validators.minLength(1), Validators.maxLength(10)])
    ],
    pass: [null, Validators.compose([
      Validators.required, Validators.minLength(1), Validators.maxLength(10)])
    ]
  });
  ngOnInit() {
  }
  isLoginError : boolean = false;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    
    //this.router.navigate(['/home']);

    //this.Auth.registrarUsuario(user,pass);

  }



}
