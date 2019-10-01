import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { PacietnesInterface } from '../models/pacientes-interface'
import { AuthService } from './auth.service'
import { DoctoresInterface } from '../models/doctores-interface';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  
  constructor(private http: HttpClient, private authService: AuthService) { }

  public selectedPaciente: PacietnesInterface = {
    id:null,
    NRO_SEGURO_PAC:'',
    CI_PAC:'',
    NOMBRE_PAC:'',
    APE_PAT_PAC:'',
    APE_MAT_PAC:'',
    SEXO_PAC:'',
    FECHA_NAC_PAC:'',
    EMAIL_PAC:'',
    DIRECCION_PAC:'',
    TELEFONO_PAC:''
  };
  
  headers : HttpHeaders = new HttpHeaders({
    "Content-Type":"application/json",
    Authorization: this.authService.getToken()
  })

  pacientes: Observable<any>;
  paciente: Observable<any>;

  doctores: Observable<any>;
  doctor: Observable<any>;
  
  getAllPacinetes(){
    const url_api = 'http://localhost:3000/api/pacientes';
    return this.http.get(url_api);
  }
  //http://localhost:3000/api/pacientes/5c786379f038784b8c3738b8
  getPacientesById(id: String){
    const url_api = `http://localhost:3000/api/pacientes/${id}`;
    return (this.paciente = this.http.get(url_api));
  }
  getReservas(){
    const url_api = `http://localhost:3000/api/pacientes?filter[where][reserva]=si`;
    return (this.paciente = this.http.get(url_api));
  }
  savePacientes(paciente: PacietnesInterface){
    // TODO: obtener token
    // TODO: not null
    let token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/pacientes`;
    //const url_api = `http://localhost:3000/api/pacientes?access_token=${token}`
    return this.http
    .post<PacietnesInterface>(url_api, paciente,{headers: this.headers})
    .pipe(map(data => data));
  }
  updatePacientes(paciente, id:string){
    // TODO: obtener token
    // TODO: not null
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/pacientes/${id}`;
    //const url_api = `http://localhost:3000/api/pacientes/${id}/?access_token=${token}`;
    return this.http
    .put<PacietnesInterface>(url_api, paciente,{headers: this.headers})
    .pipe(map(data => data));
  }
  deletePacientes(id: String){
    // TODO: obtener token
    // TODO: not null
    console.log(id);
    //const url_api = `http://localhost:3000/api/pacientes/${id}`;
    let token = this.authService.getToken();
    //const url_api = `http://localhost:3000/api/pacientes/${id}/?access_token=${token}`;
    const url_api = `http://localhost:3000/api/pacientes/${id}`;
    console.log(url_api);
    return this.http
    .delete<PacietnesInterface>(url_api,{headers: this.headers})
    .pipe(map(data => data));
  }

  getAllUsers(){
    let token = this.authService.getToken();
    console.log(token);
    //const url_api = `http://localhost:3000/api/Users/?access_token=${token}`;
    const url_api = `http://localhost:3000/api/Users`;
    console.log(url_api);
    return this.http.get(url_api);
  }

  getAllDoctores(){
    const url_api = 'http://localhost:3000/api/doctores';
    return this.http.get(url_api);
  }
  getDoctoresById(id: String){
    const url_api = `http://localhost:3000/api/doctores/${id}`;
    return (this.paciente = this.http.get(url_api));
  }
  saveDoctores(doctor: DoctoresInterface){
    // TODO: obtener token
    // TODO: not null
    let token = this.authService.getToken();
    //const url_api = `http://localhost:3000/api/doctores?access_token=${token}`;
    const url_api = `http://localhost:3000/api/doctores`;
    return this.http
    .post<PacietnesInterface>(url_api, doctor,{headers: this.headers})
    .pipe(map(data => data));
  }
  updateDoctores(doctor, id:string){
    // TODO: obtener token
    // TODO: not null
    const token = this.authService.getToken();
    //const url_api = `http://localhost:3000/api/doctores/${id}/?access_token=${token}`;
    const url_api = `http://localhost:3000/api/doctores/${id}`;
    return this.http
    .put<PacietnesInterface>(url_api, doctor,{headers: this.headers})
    .pipe(map(data => data));
  }
  deleteDoctores(id: String){
    // TODO: obtener token
    // TODO: not null
    console.log(id);
    //const url_api = `http://localhost:3000/api/pacientes/${id}`;
    let token = this.authService.getToken();
    //const url_api = `http://localhost:3000/api/doctores/${id}/?access_token=${token}`;
    const url_api = `http://localhost:3000/api/doctores/${id}`;
    console.log(url_api);
    return this.http
    .delete<PacietnesInterface>(url_api,{headers: this.headers})
    .pipe(map(data => data));
  }
}
