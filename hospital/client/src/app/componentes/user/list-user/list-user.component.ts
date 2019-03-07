import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataApiService } from 'src/app/services/data-api.service';
import { MatDialog } from '@angular/material';
import { UserInterface } from '../../../models/user-interface';
import { DataSource } from '@angular/cdk/table';
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  title = 'Usuarios';
  subtitle = 'Gestion de usuarios';

  constructor(
    private authService:AuthService,
    private dataApi: DataApiService, 
    public dialog: MatDialog) { }
  
  private user: UserInterface = {
    name:"",
    email:"",
    username:"",
    password:""
  };

  displayedColumns: string[] = ['name', 'email', 'username', 'acciones'];
  dataSource = new UsersDataSource(this.dataApi);

  ngOnInit() {
    this.getListUser();
  }
  
  getListUser() {
    this.dataApi
      .getAllUsers()
      .subscribe(
        (user: UserInterface) => this.user = user
      );
  }

}

export class UsersDataSource extends DataSource<any> {
  constructor(private dataApiService: DataApiService) {
    super();
  }

  connect(): Observable<UsersDataSource[]> {
    return this.dataApiService.getAllUsers();
  }
  disconnect() { }
}
