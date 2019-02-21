import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';   

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule, 
  MatTableModule, 
  MatPaginatorModule, 
  MatSortModule ,
  MatNativeDateModule, 
  MatRadioModule
  } 
  from '@angular/material';
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

import {ToastModule } from 'ng6-toastr/ng2-toastr';
import {ToastsManager } from 'ng6-toastr/ng2-toastr';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { RegistroPageComponent } from './componentes/registro-page/registro-page.component';
import { NavBarPageComponent } from './componentes/nav-bar-page/nav-bar-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { PrivadoPageComponent } from './componentes/privado-page/privado-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';

import { UsuarioService } from './servicios/usuario.service';
import { UserComponent } from './user/user.component';
import { SingInComponent } from './user/sing-in/sing-in.component';
import { SingUpComponent } from './user/sing-up/sing-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegistroPageComponent,
    NavBarPageComponent,
    LoginPageComponent,
    PrivadoPageComponent,
    NotFoundPageComponent,
    UserComponent,
    SingInComponent,
    SingUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatRadioModule,
    MatDialogModule,
    ToastModule.forRoot()
  ],
  exports:[
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [ToastsManager, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
