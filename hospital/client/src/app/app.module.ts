import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ListComponent } from './componentes/pacientes/list/list.component';
import { FormCreateComponent } from './componentes/pacientes/form-create/form-create.component';
import { ViewComponent } from './componentes/pacientes/view/view.component';
import { LoginComponent } from './componentes/user/login/login.component';
import { RegisterComponent } from './componentes/user/register/register.component';
import { PerfilComponent } from './componentes/user/perfil/perfil.component';
import { Page404Component } from './componentes/page404/page404.component';

import { HttpClientModule } from '@angular/common/http';
//services
import { DataApiService } from './services/data-api.service';

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
    Page404Component
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
    HttpClientModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
