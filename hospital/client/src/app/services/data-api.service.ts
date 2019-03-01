import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  pacientes: Observable<any>;
  paciente: Observable<any>;
  
  constructor(private http: HttpClient, private authService: AuthService) { }
  headers : HttpHeaders = new HttpHeaders({
    "Content-Type":"application/json",
    Authorization: this.authService.getToken()
  })

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

  savePacientes(paciente){
    // TODO: obtener token
    // TODO: not null
    let token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/pacientes?access_token=${token}`;
    return this.http.post(url_api paciente,{headers: this.headers})
    .pipe(map(data) => data));
  }

  updatePacientes(paciente){
    // TODO: obtener token
    // TODO: not null
    let token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/pacientes?access_token=${token}`;
    return this.http.put(url_api paciente,{headers: this.headers})
    .pipe(map(data) => data));
  }

  deletePacientes(id: String){
    // TODO: obtener token
    // TODO: not null
    let token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/pacientes?access_token=${token}`;
    return this.http.delete(url_api paciente,{headers: this.headers})
    .pipe(map(data) => data));
  }
}
