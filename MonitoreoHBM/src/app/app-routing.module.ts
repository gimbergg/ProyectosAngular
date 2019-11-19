import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { CobranzasComponent } from './componentes/cobranzas/cobranzas.component';
import { ActividadComponent } from './componentes/actividad/actividad.component';
import { Page404Component } from './componentes/page404/page404.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { DashboardComponent } from './componentes/pedidos/dashboard/dashboard.component';
import { DashboardComponent as dashboardRecibos } from './componentes/cobranzas/dashboard/dashboard.component'
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'actividad', component: ActividadComponent},
  { path: 'pedidos', component: PedidosComponent},
  { path: 'pedidos/Dashboard', component: DashboardComponent},
  { path: 'cobranzas', component: CobranzasComponent},
  { path: 'cobranzas/Dashboard', component: dashboardRecibos},
  { path: 'usuarios', component: UsuariosComponent},
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
