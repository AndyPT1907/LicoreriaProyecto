import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  

  email: any;
  password: any;

servicio = inject(LoginService)

ruta = inject(Router)

login() {
  this.servicio.login(this.email, this.password).subscribe(
    success => {
      if (success) {
        if (this.servicio.isAdmin()) {
          this.ruta.navigate(['/users']);
        } else {
          this.ruta.navigate(['/home']);
        }
      } else {
        alert('Credenciales incorrectas');
      }
    }
  );
}
  
}
