import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  pacientes: Observable<any>;
  paciente: Observable<any>;
  
  constructor(private http: HttpClient) { }

  getAllPacinetes(){
    const url_api = 'http://localhost:3000/api/pacientes';
    return this.http.get(url_api);
  }
  
}
