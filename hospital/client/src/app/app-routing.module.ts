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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pacientes', component: ListComponent },
  { path: 'pacientes/:id', component: ViewComponent },
  { path: 'pacientes/create', component: FormCreateComponent },
  { path: 'user', component: ListUserComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/perfil', component: PerfilComponent }, // Only user auth
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
