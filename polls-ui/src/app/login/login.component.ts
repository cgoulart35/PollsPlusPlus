import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatDialogClose} from "@angular/material/dialog";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    MatIcon,
    MatDialogClose,
    MatIconButton
  ]
})
export class LoginComponent {
  email: string | undefined;
  password: string | undefined;

  constructor(public authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.password);
  }

  updateProfile() {
    this.authService.updateProfile(this.email, this.password);
  }
}
