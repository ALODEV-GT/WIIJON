import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent {

  constructor(
    private authService: AuthService
  ) {

  }

  say() {
    this.authService.save().subscribe(resp => console.log(resp));
  }
}
