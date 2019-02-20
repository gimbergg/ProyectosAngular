import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm = this.fb.group({
    user: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    pass: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ]
  });

  constructor(private fb: FormBuilder, public router:Router, private Auth:UsuarioService) {}
  user: string;
 
  setValue() { this.user = 'Nancy'; }
  onSubmit(event) {
    
    //this.router.navigate(['/home']);

    //this.Auth.registrarUsuario(user,pass);
    console.log(event);
  }
}
