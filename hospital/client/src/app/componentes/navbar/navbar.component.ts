import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Router,NavigationEnd} from '@angular/router';
import { UserInterface } from 'src/app/models/user-interface';
import { Location } from '@angular/common';

import { NgxSpinnerService} from 'ngx-spinner';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  public app_name = "HOSPITAL";
  public user: UserInterface;
  public islogged:boolean = false;
  public ruta = '/user/perfil';
  public hideElement = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService:AuthService,
    private router:Router,
    private spinnerService: NgxSpinnerService,
    private location: Location) { 
      this.router.events.subscribe(
        event => {
          if(event instanceof NavigationEnd ){
            if(event.url == this.ruta){
              this.hideElement =true;
            }else{
              this.hideElement =false;
            }
            console.log(this.hideElement);
          }
        }
      )
    }

    onCheckUser(){
      if(this.authService.getCurrenUser() == null){
        this.islogged = false;
      }else{
        this.islogged = true;
      }
    }
    ngOnInit() {
      this.spinner();
      this.onCheckUser();
      this.user = this.authService.getCurrenUser();
    }    
    spinner(): void{
      this.spinnerService.show();
      setTimeout(() => {
        this.spinnerService.hide();
      }, 2000);
    }
    onLogout(){
      this.authService.logoutUser().subscribe(
        res => {
          location.reload(),
          this.router.navigate(['/user/login'])
        },
        err => {}
      )
    }
}
