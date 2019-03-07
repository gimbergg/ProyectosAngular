import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup, FormControl  } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/models/user-interface';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  addressForm = this.fb.group({
    name: null,
    email: null,
    password: null
  });
  constructor(
    private authService:AuthService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegisterComponent>,
    private router:Router) {}

  private user: UserInterface = {
      name:"",
      email:"",
      password:""
    };
  
  ngOnInit() {
  }

  onRegister(): void{
    console.log(this.addressForm.value);    
    this.authService.registerUser(
        this.addressForm.get('name').value,
        this.addressForm.get('email').value,
        this.addressForm.get('password').value
        )
      .subscribe(
        user => {
          this.authService.setUser(user);
          let token = user.id;
          this.authService.setToken(token);
          this.router.navigate(['user/perfil']);
          this.onClose();
        },
        err =>{
          console.log(err)
        }
    );
      
  }
  onClose() {
    this.dialogRef.close();
  }

}
