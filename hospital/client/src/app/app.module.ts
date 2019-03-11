import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, 
  MatButtonModule,
   MatSidenavModule,
   MatIconModule,
   MatListModule,
   MatTableModule,
   MatPaginatorModule,
   MatSortModule,
   MatNativeDateModule,
   MatRadioModule,
   MatMenuModule,
   MatFormFieldModule,
   MatSelectModule,
   MatInputModule,
   MatDatepickerModule,
   MatGridListModule,
   MatButtonToggleModule,
   MatDialogModule,
   MatStepperModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import { ListComponent } from './componentes/pacientes/list/list.component';
import { FormCreateComponent } from './componentes/pacientes/form-create/form-create.component';
import { ViewComponent } from './componentes/pacientes/view/view.component';
import { LoginComponent } from './componentes/user/login/login.component';
import { RegisterComponent } from './componentes/user/register/register.component';
import { PerfilComponent } from './componentes/user/perfil/perfil.component';
import { Page404Component } from './componentes/page404/page404.component';
import { MatCardModule } from '@angular/material/card';
import {NgxSpinnerModule} from 'ngx-spinner';

import { HttpClientModule } from '@angular/common/http';
//services
import { DataApiService } from './services/data-api.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListUserComponent } from './componentes/user/list-user/list-user.component';
import { ViewDocComponent } from './componentes/doctores/view-doc/view-doc.component';
import { ListDocComponent } from './componentes/doctores/list-doc/list-doc.component';
import { FormDocComponent } from './componentes/doctores/form-doc/form-doc.component';
import { PerfilEditComponent } from './componentes/user/perfil-edit/perfil-edit.component';
import { ResListComponent } from './componentes/reservas/res-list/res-list.component';
import { ResFormComponent } from './componentes/reservas/res-form/res-form.component';
import { ResViewComponent } from './componentes/reservas/res-view/res-view.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarioComponent } from './componentes/calendario/calendario.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ListComponent,
    FormCreateComponent,
    ViewComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    Page404Component,
    ListUserComponent,
    ViewDocComponent,
    ListDocComponent,
    FormDocComponent,
    PerfilEditComponent,
    ResListComponent,
    ResFormComponent,
    ResViewComponent,
    CalendarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatListModule, 
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule,
    MatNativeDateModule, 
    MatRadioModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule,
    MatCardModule,
    MatBadgeModule,
    NgxSpinnerModule,
    
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,

    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgbModalModule
  ],
  exports:[
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  entryComponents:[
    FormCreateComponent,
    ViewComponent,
    FormDocComponent,
    ViewDocComponent,
    PerfilEditComponent
  ],
  providers: [MatDatepickerModule,DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
