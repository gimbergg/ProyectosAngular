import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { RegistroPageComponent } from './componentes/registro-page/registro-page.component';
import { PrivadoPageComponent } from './componentes/privado-page/privado-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
import { AuthGuard } from './seguridad/auth.guard';

import { UserComponent } from './user/user.component';
import { SingInComponent } from './user/sing-in/sing-in.component';
import { SingUpComponent } from './user/sing-up/sing-up.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {
    path: 'registrar', component: UserComponent, 
    children:[{path:'',component: SingUpComponent}]
  },
  {
    path: 'login', component: UserComponent, 
    children:[{path:'',component: SingInComponent}]
  },
  {path:'', redirectTo:'/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
