import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup, FormControl  } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/models/user-interface';
import { Router } from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  addressForm = this.fb.group({
    name: null,
    email: null,
    password: null
  });

  constructor(
    private authService:AuthService,
    private fb: FormBuilder,
    private router:Router,
    private location:Location) {}

  private user: UserInterface = {
      email:"",
      password:""
    };

  ngOnInit() {
  }

  onLogin(){
    return this.authService.loginUser(
      this.addressForm.get('email').value,
      this.addressForm.get('password').value
    )
    .subscribe(
      data => {
        console.log(data);
        this.authService.setUser(data.user);
        let token = data.id;
        this.authService.setToken(token);
        location.reload() 
        this.router.navigate(['/']);
         
      },    
      err => {
        alert('Datos incorrectos, verifique sus datos');
        console.log(err);
      }
    );
  }

}
