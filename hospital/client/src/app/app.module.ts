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
import { ListComponent } from './componentes/pacientes/list/list.component';
import { FormCreateComponent } from './componentes/pacientes/form-create/form-create.component';
import { ViewComponent } from './componentes/pacientes/view/view.component';
import { LoginComponent } from './componentes/user/login/login.component';
import { RegisterComponent } from './componentes/user/register/register.component';
import { PerfilComponent } from './componentes/user/perfil/perfil.component';
import { Page404Component } from './componentes/page404/page404.component';
import { MatCardModule } from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';
//services
import { DataApiService } from './services/data-api.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListUserComponent } from './componentes/user/list-user/list-user.component';
import { ViewDocComponent } from './componentes/doctores/view-doc/view-doc.component';
import { ListDocComponent } from './componentes/doctores/list-doc/list-doc.component';
import { FormDocComponent } from './componentes/doctores/form-doc/form-doc.component';
import { PerfilEditComponent } from './componentes/user/perfil-edit/perfil-edit.component';

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
    PerfilEditComponent
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

    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,

    
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
