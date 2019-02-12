import { BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule, 
  MatTableModule, 
  MatPaginatorModule, 
  MatSortModule ,
  MatNativeDateModule, MatRadioModule
  } from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PacientesFormComponent } from './pacientes-form/pacientes-form.component';
import {MatStepperModule} from '@angular/material/stepper';
import { ReservaFormComponent } from './reserva-form/reserva-form.component';
import { ActividadComponent } from './actividad/actividad.component';
import { ActividadDoctoresComponent } from './actividad-doctores/actividad-doctores.component';
import { ActividadEspecialidadComponent } from './actividad-especialidad/actividad-especialidad.component';
import { ActividadDocFormComponent } from './actividad-doc-form/actividad-doc-form.component';
import { ActividadEspecFormComponent } from './actividad-espec-form/actividad-espec-form.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    UsuariosComponent,
    UsuariosFormComponent,
    PacientesFormComponent,
    ReservaFormComponent,
    ActividadComponent,
    ActividadDoctoresComponent,
    ActividadEspecialidadComponent,
    ActividadDocFormComponent,
    ActividadEspecFormComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatTabsModule,
    MatBadgeModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatStepperModule
  ],
  exports:[
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  entryComponents:[
    UsuariosFormComponent, 
    PacientesFormComponent,
    ReservaFormComponent,
    ActividadDocFormComponent,
    ActividadEspecFormComponent
  ],
  providers: [MatDatepickerModule, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
