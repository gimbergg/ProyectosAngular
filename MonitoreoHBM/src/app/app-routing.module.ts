import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { CobranzasComponent } from './componentes/cobranzas/cobranzas.component';
import { ActividadComponent } from './componentes/actividad/actividad.component';
import { Page404Component } from './componentes/page404/page404.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { DashboardComponent } from './componentes/pedidos/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'actividad', component: ActividadComponent},
  { path: 'pedidos', component: PedidosComponent},
  { path: 'pedidos/Dashboard', component: DashboardComponent},
  { path: 'cobranzas', component: CobranzasComponent},
  { path: 'usuarios', component: UsuariosComponent},
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
