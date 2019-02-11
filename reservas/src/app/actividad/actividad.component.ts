import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {
  title='Actividad';
  subtitle='Gestion interna de Medicina';
  constructor() { }

  ngOnInit() {
  }

}
