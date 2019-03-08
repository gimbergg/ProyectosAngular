import { Component, OnInit, Input, Inject} from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { PacietnesInterface } from 'src/app/models/pacientes-interface';
import { MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormBuilder,Validators  } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {
  id: string;
  constructor(
    private fb: FormBuilder,
    private dataApi: DataApiService, 
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<ViewComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.id = data.key;
     }
    
     addressForm = this.fb.group({
      nombre: [{value: '', disabled: true}, Validators.required],
      apellidos: [{value: '', disabled: true}, Validators.required],
      ci: [{value: '', disabled: true}, Validators.required],
      aseguradora: [{value: '', disabled: true}, Validators.required],
      seguro: [{value: '', disabled: true}, Validators.required],
      vigencia: [{value: '', disabled: true}, Validators.required], 
      tipo: [{value: '', disabled: true}, Validators.required],
      telefono: [{value: '', disabled: true}, Validators.required],
      direccion: [{value: '', disabled: true}, Validators.required],
      nombrec:[{value: '', disabled: true}, Validators.required],
      cic:[{value: '', disabled: true}, Validators.required],
      telefonoc:[{value: '', disabled: true}, Validators.required],
      email:[{value: '', disabled: true}, Validators.required],
      parentesco:[{value: '', disabled: true}, Validators.required],
      antecedentes:[{value: 'asdsadsad', disabled: true}, Validators.required]
    });
  private paciente: PacietnesInterface = {
    id: null,
    nombre:'',
    apellidos:'',
    ci:'',
    seguro:'',
    telefono:'',
    direccion:'',
    reserva:'',
    vigencia:'',
    nombrec:'',
    cic:'',
    telefonoc:'',
    email:'',
    parentesco:'',
    antecedentes:''
  }

  ngOnInit(){    
    //Envio recepcion del parametro por url
    //const paciente_id = this.route.snapshot.params["id"];
    console.log('EL ID DESDE EL HIJO '+ this.id);
    this.getDetails(this.id);
   }
  
  getDetails(id: String) {
    this.dataApi.getPacientesById(id)
      .subscribe(paciente => (this.paciente = paciente));    
  }
  
}
