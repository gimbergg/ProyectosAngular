import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTableComponent } from './my-table/my-table.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';


const routes: Routes = [
  { path: 'ruta1', component: MyTableComponent},
  { path: 'ruta2', component: MyDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
