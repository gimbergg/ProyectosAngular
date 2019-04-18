import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { CobranzasComponent } from './componentes/cobranzas/cobranzas.component';

const routes: Routes = [
  { path: 'pedidos', component: PedidosComponent},
  { path: 'cobranzas', component: CobranzasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
