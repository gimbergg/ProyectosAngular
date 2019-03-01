import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { PacietnesInterface } from 'src/app/models/pacientes-interface';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  private paciente: PacietnesInterface = {
    nombre: '',
    apellidos: '',
    ci: '',
    seguro: '',
    telefono: '',
    direccion: '',
    reserva: ''
  }
  ngOnInit(){
    const paciente_id = this.route.snapshot.params["id"];
    this.getDetails(paciente_id);
   }
   
  getDetails(id: String) {
    this.dataApi.getPacientesById(id)
      .subscribe(paciente => (this.paciente = paciente))
  }

}
