import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    user: [null, Validators.required],
    pass: [null, Validators.compose([
      Validators.required, Validators.minLength(1), Validators.maxLength(30)])
    ],
    pass2: [null, Validators.compose([
      Validators.required, Validators.minLength(1), Validators.maxLength(30)])
    ]
  });
  us: LoginModel = new LoginModel();
  hide = true;
  hide2 = true;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {

  }

  onLoginSubmit(event) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#user').value
    const pass = target.querySelector('#user').value
    console.log(username,pass);
  }
}
