import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { modalAlert } from '../../models/Alert';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = ""
  password: string = ""

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  signUp() {
    this.router.navigate(["/register"])
  }

  sigIn() {

    if (!this.username.replace(" ", "") || !this.password.replace(" ", "")) {
      modalAlert("Error", "Debes llenar todos los campos", "error")
    }

    let user: User = {
      username: this.username,
      password: this.password
    }

    //TODO: Add service 
    //console.log(user);
    this.authService.save().subscribe((resp) => {
      console.log(resp);
    })
  }

}
