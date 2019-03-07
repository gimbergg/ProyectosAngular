import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/models/user-interface';
import { MatDialog } from '@angular/material';
import { PerfilEditComponent } from '../perfil-edit/perfil-edit.component';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  title = 'Perfil';
  subtitle = 'Informacion de perfil de Usario: ';
  
  constructor(
    private authService: AuthService,
    public dialog: MatDialog
  ) {}

  user: UserInterface;

  ngOnInit() {
    this.user = this.authService.getCurrenUser();
    console.log(this.user.name);
  }

  openDialogEdit(){
    
      const dialogRef = this.dialog.open(PerfilEditComponent, {
        width: '60%',
        height: 'auto'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('Cerrar ventana');
      });
  }
}
