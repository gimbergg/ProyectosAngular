import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ListComponent } from './componentes/pacientes/list/list.component';
import { ViewComponent } from './componentes/pacientes/view/view.component';
import { FormCreateComponent } from './componentes/pacientes/form-create/form-create.component';
import { LoginComponent } from './componentes/user/login/login.component';
import { RegisterComponent } from './componentes/user/register/register.component';
import { PerfilComponent } from './componentes/user/perfil/perfil.component';
import { Page404Component } from './componentes/page404/page404.component';
import { ListUserComponent } from './componentes/user/list-user/list-user.component'
import { ListDocComponent } from './componentes/doctores/list-doc/list-doc.component';
import { ResListComponent } from './componentes/reservas/res-list/res-list.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent,canActivate:[AuthGuard] },
  { path: 'pacientes', component: ListComponent,canActivate:[AuthGuard]},
  { path: 'pacientes/:id', component: ViewComponent },
  { path: 'pacientes/create', component: FormCreateComponent },
  { path: 'doctores', component: ListDocComponent, canActivate:[AuthGuard] },
  { path: 'citas', component: ResListComponent },
  { path: 'user', component: ListUserComponent,canActivate:[AuthGuard] },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/perfil', component: PerfilComponent }, // Only user auth
  { path: '**', component: Page404Component,canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
