import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MyTableComponent } from './my-table/my-table.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { ReservaComponent } from './reserva/reserva.component';
import { PacientesListComponent } from './pacientes-list/pacientes-list.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ActividadComponent } from './actividad/actividad.component';
import { InicioComponent } from './inicio/inicio.component';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pacientes', component: PacientesComponent },
  { path: 'reserva', component: ReservaComponent },
  { path: 'pacienteslist', component: PacientesListComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'actividad', component: ActividadComponent },
  { path: 'inicio', component: InicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  MyNavComponent,
  MyTableComponent,
  PacientesComponent,
  PacientesComponent, 
  PacientesListComponent,
  ReservaComponent,
  UsuariosComponent,
  ActividadComponent,
  InicioComponent
]
