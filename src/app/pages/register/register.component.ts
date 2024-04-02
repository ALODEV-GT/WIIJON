import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { modalAlert } from '../../models/Alert';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  username:string = ""
  password:string = ""
  passwordConfirm:string = ""


  constructor(
    private router: Router
  ) {

  }

  signIn() {
    this.router.navigate(['/login'])
  }

  signUp() {
    if(!this.username.replace(" ","") || !this.password.replace(" ","")|| !this.passwordConfirm.replace(" ","") ){
      modalAlert("Error","Debes llenar todos los campos","error")
    }


    if (this.password !== this.passwordConfirm) {
      modalAlert("Error","Las contraseñas no coincide","error")
    }


  }

}
