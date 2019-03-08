import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/models/user-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private authService: AuthService,
    public dialog: MatDialog
  ) {}

  user: UserInterface;

  ngOnInit() {
    this.user = this.authService.getCurrenUser();
    console.log(this.user.name);
  }

}
