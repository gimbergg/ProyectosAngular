import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './componentes/menu/menu.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { CobranzasComponent } from './componentes/cobranzas/cobranzas.component';
import { MyNavComponent } from './componentes/my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatDialogModule, } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

import { PedidosService } from './servicios/pedidos.service';
import { ActividadComponent } from './componentes/actividad/actividad.component';
import { Page404Component } from './componentes/page404/page404.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { ViewComponent } from './componentes/pedidos/view/view.component';
import { DashboardComponent } from './componentes/pedidos/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PedidosComponent,
    CobranzasComponent,
    MyNavComponent,
    ActividadComponent,
    Page404Component,
    UsuariosComponent,
    ViewComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule,
    MatButtonToggleModule
  ],
  exports:[
    BrowserAnimationsModule
  ],
  entryComponents:[
    ViewComponent
  ],
  providers: [PedidosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
